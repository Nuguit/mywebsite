const sharp = require("sharp");
const path = require("path");

const targets = [
  "src/Pages/SobreMi/perfil.png",
  "src/Pages/pixelart.png",
  "src/Pages/OtrosProyectos/pastinpixels.jpg",
  "src/Pages/OtrosProyectos/palmotion.jpg",
  "src/Pages/OtrosProyectos/movieselector.jpg",
  "src/Pages/OtrosProyectos/eagles.jpeg",
  "src/Pages/SafeMap/safemap.png",
];

(async () => {
  for (const rel of targets) {
    const input = path.join(__dirname, "..", rel);
    const output = input.replace(/\.(png|jpe?g)$/i, ".webp");
    const info = await sharp(input).webp({ quality: 82 }).toFile(output);
    console.log(`${rel} -> ${path.basename(output)} (${(info.size / 1024).toFixed(1)} KB)`);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
