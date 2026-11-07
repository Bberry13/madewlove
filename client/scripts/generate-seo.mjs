import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const client = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(client, 'dist');
const pages = JSON.parse(await readFile(path.join(client, 'src/shared/seo/pages.json'), 'utf8'));
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const origin = 'https://madewlove.ru';
const escape = value => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Generate page-specific HTML heads for both static hosting and Express.
// The page body still renders through React; this is not full prerendering.
export function renderHead(template, pathname, page) {
  const url = origin + pathname;
  return template
    .replace(/<title>[\s\S]*?<\/title>/, '<title>' + escape(page.title) + '</title>')
    .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, (_,a,b) => a + escape(page.description) + b)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/, (_,a,b) => a + url + b)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/, (_,a,b) => a + escape(page.title) + b)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/?>)/, (_,a,b) => a + escape(page.description) + b)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/, (_,a,b) => a + url + b);
}

for (const [pathname,page] of Object.entries(pages)) {
  const folder = pathname === '/' ? dist : path.join(dist,pathname.slice(1));
  await mkdir(folder,{recursive:true});
  await writeFile(path.join(folder,'index.html'),renderHead(template,pathname,page));
}
const urls = Object.keys(pages).map(url => '  <url><loc>'+origin+url+'</loc></url>').join('\n');
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls+'\n</urlset>\n';
await writeFile(path.join(dist,'sitemap.xml'),sitemap);
await writeFile(path.join(client,'public/sitemap.xml'),sitemap);
const notFound = renderHead(template, '/404', {title:'Страница не найдена | Made With Love',description:'Запрошенная страница не найдена.'})
  .replace('</head>','<meta name="robots" content="noindex, follow" /></head>');
await writeFile(path.join(dist,'404.html'),notFound);
console.log('Generated SEO HTML and sitemap for '+Object.keys(pages).length+' pages.');
