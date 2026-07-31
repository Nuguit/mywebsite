const sharp = require("sharp");
const path = require("path");

const source = path.join(__dirname, "..", "public", "favicon.ico");

const targets = [
  { file: "apple-touch-icon.png", size: 180 },
  { file: "favicon-32x32.png", size: 32 },
  { file: "favicon-16x16.png", size: 16 },
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
];

(async () => {
  for (const { file, size } of targets) {
    const output = path.join(__dirname, "..", "public", file);
    await sharp(source).resize(size, size).png().toFile(output);
    console.log(`${file} (${size}x${size})`);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
