#!/usr/bin/env bash
set -Eeuo pipefail
config=/etc/nginx/sites-available/madewlove
stamp=$(date +%Y%m%d-%H%M%S)-$$
backup="$config.before-canonical-$stamp"
candidate="$config.canonical-candidate-$stamp"
exec 9>/root/madewlove-canonical-host.lock
flock -n 9 || { echo 'Another configuration update is running'; exit 1; }
nginx -t
cp -a "$config" "$backup"

node - "$config" "$candidate" <<'PATCH'
const fs = require('node:fs');
const [config, destination] = process.argv.slice(2);
const original = fs.readFileSync(config, 'utf8');
if (original.includes('# SEO: canonical hostname')) {
  fs.writeFileSync(destination, original);
} else {
  if (!original.includes('proxy_pass http://localhost:3000;')) throw Error('Unexpected upstream; configuration unchanged');
  if ((original.match(/server_name madewlove\.ru www\.madewlove\.ru;/g) || []).length !== 2) throw Error('Unexpected server blocks; configuration unchanged');
  if ((original.match(/https:\/\/\$host\$request_uri/g) || []).length !== 2) throw Error('Unexpected HTTP redirects; configuration unchanged');
  let updated = original.replace(/https:\/\/\$host\$request_uri/g, 'https://madewlove.ru$request_uri');
  updated = updated.replace('server_name madewlove.ru www.madewlove.ru;', match => match + '\n\n    # SEO: canonical hostname\n    if ($host = www.madewlove.ru) {\n        return 301 https://madewlove.ru$request_uri;\n    }');
  fs.writeFileSync(destination, updated);
}
PATCH

rollback() {
  trap - ERR
  set +e
  cp -a "$backup" "$config"
  nginx -t && systemctl reload nginx
  echo "CONFIG_RESTORED: $backup"
  exit 1
}
trap rollback ERR
cp "$candidate" "$config"
nginx -t
systemctl reload nginx
sleep 1

# Test this server directly, with the real TLS hostname and certificate.
for scheme in http https; do
  if [ "$scheme" = https ]; then port=443; else port=80; fi
  result=$(curl --silent --show-error --max-time 10 \
    --resolve "www.madewlove.ru:$port:127.0.0.1" \
    --output /dev/null --write-out '%{http_code} %{redirect_url}' \
    "$scheme://www.madewlove.ru/contacts?seo_check=1")
  test "$result" = '301 https://madewlove.ru/contacts?seo_check=1'
  echo "$scheme WWW_REDIRECT_OK"
done
result=$(curl --silent --show-error --max-time 10 \
  --resolve 'madewlove.ru:443:127.0.0.1' \
  --output /dev/null --write-out '%{http_code}' https://madewlove.ru/)
test "$result" = 200
trap - ERR
echo 'CANONICAL_HOST_OK: https://madewlove.ru'
echo "CONFIG_BACKUP: $backup"
