import sharp from 'sharp';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src/assets');

const targets = [
  ['project1.png', 1280],
  ['project2.png', 1280],
  ['project3.png', 1280],
  ['pic.jfif', 640],
];

for (const [name, width] of targets) {
  const input = resolve(root, name);
  const out = resolve(root, name.replace(/\.(png|jfif)$/i, '.webp'));
  const { size } = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(out);
  console.log(`${name} -> ${out.split(/[\\/]/).pop()} (${(size / 1024).toFixed(1)} kB)`);
}
