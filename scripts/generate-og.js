import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const W = 1200;
const H = 630;
const CYAN = [0, 255, 255];
const VIOLET = [167, 139, 250];
const INK = [5, 5, 5];

const bytes = Buffer.alloc(W * H * 4);

const set = (x, y, [r, g, b]) => {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const i = (y * W + x) * 4;
  bytes[i] = r;
  bytes[i + 1] = g;
  bytes[i + 2] = b;
  bytes[i + 3] = 255;
};

const fillRect = (x0, y0, w, h, color) => {
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) set(x, y, color);
  }
};

const segDist = (px, py, x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy;
  let t = ((px - x1) * dx + (py - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + t * dx;
  const cy = y1 + t * dy;
  return Math.hypot(px - cx, py - cy);
};

const drawSegment = (x1, y1, x2, y2, thickness, color) => {
  const minX = Math.floor(Math.min(x1, x2)) - thickness;
  const maxX = Math.ceil(Math.max(x1, x2)) + thickness;
  const minY = Math.floor(Math.min(y1, y2)) - thickness;
  const maxY = Math.ceil(Math.max(y1, y2)) + thickness;
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      if (segDist(x, y, x1, y1, x2, y2) <= thickness / 2) set(x, y, color);
    }
  }
};

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) set(x, y, INK);
}

const cx = 560;
const cy = 340;
const cya = 28;
drawSegment(cx - 90, cy - 90, cx + 90, cy, cya, CYAN);
drawSegment(cx - 90, cy + 90, cx + 90, cy, cya, CYAN);
fillRect(cx + 170, cy - cya / 2, 130, cya, CYAN);
fillRect(cx - 130, cy + 150, 430, 10, VIOLET);

const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

const crc32 = buf => {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const raw = Buffer.alloc((W * 4 + 1) * H);
for (let y = 0; y < H; y++) {
  const rowStart = y * (W * 4 + 1);
  raw[rowStart] = 0;
  bytes.copy(raw, rowStart + 1, y * W * 4, (y + 1) * W * 4);
}

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw)),
  chunk('IEND', Buffer.alloc(0)),
]);

const out = resolve(dirname(fileURLToPath(import.meta.url)), '../public/og.png');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, png);
console.log(`wrote ${out} (${png.length} bytes)`);
