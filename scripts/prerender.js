// Wraps react-snap's run() (same crawl/render logic as its CLI — see
// node_modules/react-snap/run.js) but on Linux points Puppeteer at
// @sparticuz/chromium's self-contained Chromium binary instead of
// react-snap's bundled one.
//
// Why: react-snap bundles an old Puppeteer (1.20) whose Chromium download
// needs desktop shared libraries (libnss3.so, etc.) that minimal Linux CI/
// build images — including Vercel's — don't have installed. That's a fixed
// property of the build image, not something a project's build step can
// apt-get around. @sparticuz/chromium ships a Chromium built specifically to
// run in exactly this kind of minimal Linux environment (it's the standard
// fix for "Puppeteer works locally, fails on Vercel/Lambda").
// On Windows/macOS (local dev) react-snap's own bundled Chromium already
// works fine (verified during development), so we leave it untouched there.

const path = require("path");
const { run } = require("react-snap");
const { reactSnap, homepage } = require(path.join(process.cwd(), "package.json"));

(async () => {
  const options = { ...reactSnap };
  if (homepage) {
    options.publicPath = new URL(homepage).pathname;
  }

  if (process.platform === "linux") {
    const chromium = require("@sparticuz/chromium").default;
    const executablePath = await chromium.executablePath();
    options.puppeteerExecutablePath = executablePath;
    options.puppeteerArgs = [...new Set([...(options.puppeteerArgs || []), ...chromium.args])];
    console.log(`prerender: using @sparticuz/chromium at ${executablePath}`);
  } else {
    console.log(`prerender: platform=${process.platform}, using react-snap's bundled Chromium`);
  }

  await run(options);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
