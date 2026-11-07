#!/usr/bin/env bash
set -Eeuo pipefail

# Publish the already built and tested SEO candidate. No database changes.
project=/root/madewlove
candidate=/root/madewlove-seo-KWzdMm
stamp=$(date +%Y%m%d-%H%M%S)-$$
client_backup="$project/client/dist-before-seo-$stamp"
server_backup="$project/server/dist-before-seo-$stamp"

exec 9>/root/madewlove-seo-publish.lock
flock -n 9 || { echo 'Another publication is running'; exit 1; }

test -s "$candidate/client/dist/index.html"
test -s "$candidate/client/dist/favicon.png"
test -s "$candidate/server-dist/src/app.js"
test -d "$project/client/dist/assets"
test -d "$project/server/dist"
test ! -e "$client_backup"
test ! -e "$server_backup"
curl --fail --silent --show-error --max-time 10 http://127.0.0.1:33091/ -o /dev/null

# Retain hashed assets for people who still have the previous HTML open.
cp -an "$project/client/dist/assets/." "$candidate/client/dist/assets/"

rollback() {
  trap - ERR
  set +e
  echo 'Publication failed. Restoring previous builds.'
  if [ -d "$server_backup" ]; then
    if [ -e "$project/server/dist" ]; then
      mv "$project/server/dist" "$project/server/dist-failed-seo-$stamp"
    fi
    mv "$server_backup" "$project/server/dist"
  fi
  if [ -d "$client_backup" ]; then
    if [ -e "$project/client/dist" ]; then
      mv "$project/client/dist" "$project/client/dist-failed-seo-$stamp"
    fi
    mv "$client_backup" "$project/client/dist"
  fi
  PORT=3000 CLIENT_DIST_PATH="$project/client/dist" pm2 restart madewlove --update-env
  pm2 save
  echo "ROLLBACK_ATTEMPTED: inspect application status and publication log"
  exit 1
}
trap rollback ERR

mv "$project/client/dist" "$client_backup"
mv "$candidate/client/dist" "$project/client/dist"
mv "$project/server/dist" "$server_backup"
mv "$candidate/server-dist" "$project/server/dist"

PORT=3000 CLIENT_DIST_PATH="$project/client/dist" pm2 restart madewlove --update-env
curl --fail --silent --show-error --retry 15 --retry-connrefused \
  --retry-delay 1 --max-time 3 http://127.0.0.1:3000/ -o /dev/null

node --input-type=commonjs <<'CHECK'
const assert = require('node:assert/strict');
const fs = require('node:fs');
const pages = JSON.parse(fs.readFileSync('/root/madewlove/client/src/shared/seo/pages.json', 'utf8'));
const base = 'http://127.0.0.1:3000';
async function check() {
  for (const url of Object.keys(pages)) {
    const response = await fetch(base + url);
    assert.equal(response.status, 200, url);
    const html = await response.text();
    assert(html.includes('rel="canonical" href="https://madewlove.ru' + url + '"'), url + ' canonical');
    assert(html.includes('<title>' + pages[url].title + '</title>'), url + ' title');
  }
  for (const url of ['/ckb', '/ckb/', '/vipiski', '/vipiski/']) {
    const response = await fetch(base + url, { redirect: 'manual' });
    assert.equal(response.status, 301, url);
    assert.equal(response.headers.get('location'), '/', url);
  }
  const icon = await fetch(base + '/favicon.png');
  assert.equal(icon.status, 200);
  assert(icon.headers.get('content-type').startsWith('image/png'));
  const png = Buffer.from(await icon.arrayBuffer());
  assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  const missing = await fetch(base + '/seo-check-missing-page');
  assert.equal(missing.status, 404);
  const home = await (await fetch(base + '/')).text();
  assert(home.includes('6ADQhkuiT7irZpSPIvt4lJIFsxS2a4rYhf6Y18QKsqs'), 'Google verification');
  const sitemap = await fetch(base + '/sitemap.xml');
  assert.equal(sitemap.status, 200);
  assert.equal((await sitemap.text()).match(/<loc>/g).length, Object.keys(pages).length);
  console.log('CHECK_OK: pages, redirects, canonical, titles, PNG, 404, verification, sitemap');
}
check().catch(error => { console.error(error.message); process.exitCode = 1; });
CHECK

# The main process is healthy. The preview has served its purpose.
pm2 delete madewlove-seo-preview >/dev/null 2>&1 || echo 'Preview cleanup needs checking'
pm2 save
trap - ERR
printf '%s\n' "$client_backup" "$server_backup" > /root/madewlove-seo-rollback-paths
echo "PUBLISH_OK: ca710bb"
echo "CLIENT_BACKUP: $client_backup"
echo "SERVER_BACKUP: $server_backup"
