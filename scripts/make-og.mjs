// Renders the 1200×630 share cards (public/og/<locale>.png) from the same copy
// and fonts the site uses. Run locally after copy changes; the PNGs are
// committed, so CI never needs a browser.
//
//   CHROME=/path/to/chrome npm run og
//
import { readFileSync, mkdirSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

const locales = ['en', 'ar', 'fr', 'es', 'ru', 'tr', 'sw'];
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const font = (path) => `data:font/woff2;base64,${readFileSync(`node_modules/${path}`).toString('base64')}`;
const faces = `
@font-face{font-family:Lilita;src:url(${font('@fontsource/lilita-one/files/lilita-one-latin-400-normal.woff2')});unicode-range:U+0000-00FF}
@font-face{font-family:Lilita;src:url(${font('@fontsource/lilita-one/files/lilita-one-latin-ext-400-normal.woff2')});unicode-range:U+0100-024F,U+1E00-1EFF}
@font-face{font-family:Lalezar;src:url(${font('@fontsource/lalezar/files/lalezar-arabic-400-normal.woff2')})}
@font-face{font-family:Flex;font-weight:100 1000;src:url(${font('@fontsource-variable/roboto-flex/files/roboto-flex-latin-wght-normal.woff2')});unicode-range:U+0000-00FF}
@font-face{font-family:Flex;font-weight:100 1000;src:url(${font('@fontsource-variable/roboto-flex/files/roboto-flex-latin-ext-wght-normal.woff2')});unicode-range:U+0100-024F}
@font-face{font-family:Flex;font-weight:100 1000;src:url(${font('@fontsource-variable/roboto-flex/files/roboto-flex-cyrillic-wght-normal.woff2')});unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}
@font-face{font-family:Cairo;font-weight:200 1000;src:url(${font('@fontsource-variable/cairo/files/cairo-arabic-wght-normal.woff2')})}
`;

const mark = readFileSync('public/favicon.svg', 'utf8');
const sparkle = `<svg viewBox="24 20 52 60" width="44" height="50"><path fill="#8A63B8" d="M50 25C50 36 59 50 71 50C59 50 50 64 50 75C50 64 41 50 29 50C41 50 50 36 50 25Z"/></svg>`;

function card(locale) {
  const app = JSON.parse(readFileSync(`src/i18n/app/${locale}.json`, 'utf8'));
  const rtl = locale === 'ar';
  const display =
    locale === 'ar' ? "font-family:Lalezar;line-height:1.35" : locale === 'ru' ? "font-family:Flex;font-weight:820;letter-spacing:-.02em;line-height:1.05" : "font-family:Lilita;letter-spacing:-.01em;line-height:1.03";
  const body = locale === 'ar' ? 'font-family:Cairo' : 'font-family:Flex';
  const chips = [app.chipTask, app.chipShopping, app.chipWeeklyGoal, app.chipThought];
  return `<!doctype html><html lang="${locale}" dir="${rtl ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>${faces}
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;overflow:hidden;color:#1c2b2f;${body};
    background:radial-gradient(60% 70% at ${rtl ? '10%' : '90%'} 15%,rgba(179,153,212,.45),transparent 70%),radial-gradient(50% 50% at ${rtl ? '100%' : '0%'} 100%,rgba(115,183,155,.22),transparent 70%),#eae6f2}
  .wrap{position:absolute;inset:64px 72px;display:flex;flex-direction:column}
  .brand{display:flex;align-self:flex-start;align-items:center;gap:16px;font-family:Lilita;font-size:40px}
  .brand svg{width:56px;height:56px}
  h1{margin-top:auto;font-size:${locale === 'ar' ? 70 : 76}px;font-weight:${locale === 'ru' ? 820 : 400};${display};max-width:880px}
  p{margin-top:22px;font-size:30px;color:rgba(28,43,47,.74);max-width:820px}
  .chips{position:absolute;top:70px;${rtl ? 'left' : 'right'}:72px;display:flex;gap:10px;align-items:center}
  .chip{padding:10px 18px;border-radius:999px;background:#fff;font-size:22px;font-weight:600;box-shadow:0 6px 20px rgba(28,43,47,.1)}
  .chip.on{background:#8a63b8;color:#fff}
  </style></head><body><div class="wrap">
  <div class="brand" dir="ltr">${mark}<span>Aiora</span></div>
  <h1>${app.promise}</h1><p>${app.headline}</p></div>
  <div class="chips">${sparkle}${chips.map((c, i) => `<span class="chip${i === 0 ? ' on' : ''}">${c}</span>`).join('')}</div>
  </body></html>`;
}

mkdirSync('public/og', { recursive: true });
const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
for (const l of locales) {
  await page.setContent(card(l), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/og/${l}.png` });
  console.log(`og/${l}.png`);
}
await browser.close();
