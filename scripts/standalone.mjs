/**
 * Builds a single self-contained HTML file from the production build of one
 * route, for preview hosting. The page is fully server rendered, so React is
 * not needed to read it: every Next.js chunk is dropped and the stylesheet is
 * inlined with the self-hosted fonts embedded as data URIs. Zero external
 * requests.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const ORIGIN = process.env.ORIGIN;
const ROUTE = process.env.ROUTE;
const OUT = process.env.OUT;
const NEXT_DIR = path.resolve('.next');

const get = async (p) => {
  const r = await fetch(ORIGIN + p);
  if (!r.ok) throw new Error(`${p} -> ${r.status}`);
  return r;
};

let html = await (await get(ROUTE)).text();

// 1. Inline the stylesheet with fonts embedded.
const cssTag = html.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/);
if (!cssTag) throw new Error('no stylesheet');
let css = await (await get(cssTag[1])).text();
const fonts = [...new Set([...css.matchAll(/url\((\/_next\/static\/media\/[^)]+)\)/g)].map((m) => m[1]))];
for (const u of fonts) {
  const buf = await fs.readFile(path.join(NEXT_DIR, u.replace(/^\/_next\//, '')));
  css = css.replaceAll(`url(${u})`, `url(data:font/woff2;base64,${buf.toString('base64')})`);
}
console.log(`inlined ${fonts.length} fonts`);
html = html.replace(cssTag[0], `<style>${css}</style>`);

// 2. Drop Next.js scripts and resource hints.
html = html.replace(/<link[^>]+rel="(?:preload|prefetch|preconnect|dns-prefetch|modulepreload)"[^>]*>/g, '');
html = html.replace(/<script[^>]*\ssrc="\/_next\/[^"]*"[^>]*><\/script>/g, '');
html = html.replace(/<script[^>]*>[\s\S]*?self\.__next_f[\s\S]*?<\/script>/g, '');

// 3. next/font declares its variables on <html>, which the artifact host owns.
//    Custom properties resolve where they are declared, so --font-display and
//    --font-sans resolve to nothing unless these also exist at :root.
const fontVars = [...css.matchAll(/(--font-[a-z-]+)\s*:\s*([^;}]+)/g)]
  .filter(([, n]) => n !== '--font-display' && n !== '--font-sans')
  .map(([, n, v]) => `${n}:${v.trim()};`)
  .join('');
console.log('lifted to :root:', fontVars || '(none)');

const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta charSet="[^"]*"\/?>/gi, '')
  .replace(/<meta name="viewport"[^>]*>/gi, '');
const htmlClass = (html.match(/<html[^>]*\sclass="([^"]*)"/) || [, ''])[1];
const body = html.match(/<body([^>]*)>([\s\S]*?)<\/body>/);
const bodyClass = (body[1].match(/class="([^"]*)"/) || [, ''])[1];

const out = `${head}
<style>
  :root { ${fontVars} }
  /* The host owns <body>; mirror the site's ground and base type here. */
  body {
    margin: 0;
    background-color: #f4f2ec;
    color: #0f1412;
    letter-spacing: 0.025em;
    line-height: 1.65;
  }
</style>
<div class="${`${htmlClass} ${bodyClass}`.trim()}">
${body[2]}
</div>
`;
await fs.writeFile(OUT, out);
console.log(`wrote ${OUT} (${(Buffer.byteLength(out) / 1024).toFixed(0)} KB)`);
