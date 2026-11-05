// Regenerates the static assets derived from the site:
//   public/cv/Gonzalo-Gamenara-CV-{ES,EN}.pdf  (from the /cv route)
//   public/og-image.png                         (social preview, 1200x630)
//   public/apple-touch-icon.png                 (180x180)
// Usage: npm run build && npm run assets
import { spawn } from "node:child_process";
import { mkdir, readFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const PORT = 4321;
const BASE = `http://localhost:${PORT}`;

const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], { stdio: "ignore" });
const waitForServer = async () => {
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(BASE)).ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error("vite preview did not start");
};

try {
  await waitForServer();
  await mkdir("public/cv", { recursive: true });
  const browser = await chromium.launch();

  for (const lang of ["es", "en"]) {
    const page = await browser.newPage();
    await page.goto(`${BASE}/cv?lang=${lang}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: `public/cv/Gonzalo-Gamenara-CV-${lang.toUpperCase()}.pdf`, format: "A4", printBackground: true });
    await page.close();
    console.log(`✓ CV ${lang}`);
  }

  const photo = (await readFile("src/assets/gonza.webp")).toString("base64");
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.setContent(`<!doctype html><html><head>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Space+Mono:wght@700&display=swap" rel="stylesheet">
    <style>
      *{box-sizing:border-box;margin:0}
      body{width:1200px;height:630px;background:#a3d9b1;font-family:'Space Grotesk';display:grid;place-items:center;
        background-image:linear-gradient(0deg,transparent 24%,#fcf5e3 25%,#fcf5e3 26%,transparent 27%,transparent 74%,#fcf5e3 75%,#fcf5e3 76%,transparent 77%),linear-gradient(90deg,transparent 24%,#fcf5e3 25%,#fcf5e3 26%,transparent 27%,transparent 74%,#fcf5e3 75%,#fcf5e3 76%,transparent 77%);background-size:200px 200px}
      .card{width:1080px;height:510px;background:#f7c236;border:5px solid #000;box-shadow:14px 14px 0 #000;display:flex;gap:56px;align-items:center;padding:48px}
      img{width:300px;height:375px;object-fit:cover;border:5px solid #000;background:#fca5d3;box-shadow:8px 8px 0 #000}
      h1{font-family:'Space Mono';font-size:68px;line-height:1;letter-spacing:-2px}
      .role{font-size:34px;font-weight:700;margin-top:18px}
      .stack{font-size:24px;font-weight:500;margin-top:22px;line-height:1.4}
      .url{display:inline-block;margin-top:34px;font-family:'Space Mono';font-size:22px;background:#fff;border:4px solid #000;padding:8px 16px;box-shadow:5px 5px 0 #000}
    </style></head><body><div class="card">
      <img src="data:image/webp;base64,${photo}">
      <div><h1>Gonzalo<br>Gamenara</h1>
      <p class="role">Full Stack Developer</p>
      <p class="stack">PHP · Laravel · Node.js · MySQL · Azure<br>React · TypeScript · Next.js</p>
      <span class="url">portafolio-blond-six.vercel.app</span></div>
    </div></body></html>`);
  await og.waitForLoadState("networkidle");
  await og.evaluate(() => document.fonts.ready);
  await og.screenshot({ path: "public/og-image.png" });
  console.log("✓ og-image");

  const icon = await browser.newPage({ viewport: { width: 180, height: 180 } });
  const svg = await readFile("public/favicon.svg", "utf8");
  await icon.setContent(`<body style="margin:0;background:#a3d9b1;display:grid;place-items:center;height:180px">${svg.replace("<svg ", '<svg width="150" height="150" ')}</body>`);
  await icon.screenshot({ path: "public/apple-touch-icon.png" });
  console.log("✓ apple-touch-icon");

  await browser.close();
} finally {
  server.kill();
}
