/**
 * Prepares a supplied photograph for a slot in config/images.ts.
 *
 * Resizes to a sane maximum, strips camera metadata, and writes a JPEG under
 * the exact filename <Photo> looks for. Next/Image then derives the AVIF and
 * WebP variants and the responsive sizes at request time.
 *
 * Usage:
 *   node scripts/prepare-photo.mjs <source-file> <slot>
 *   node scripts/prepare-photo.mjs ~/incoming/port.jpg heroPort
 *
 * Slots must match the keys in config/images.ts. Keep this map in step with
 * that file; it is short on purpose.
 */
import { mkdirSync } from "node:fs";
import { basename, join } from "node:path";
import sharp from "sharp";

const SLOTS = {
  heroPort: { file: "hero-port-dusk.jpg", width: 2600 },
  products: { file: "capability-products.jpg", width: 1800 },
  technology: { file: "capability-technology.jpg", width: 1800 },
  logistics: { file: "capability-logistics.jpg", width: 1800 },
  facilities: { file: "capability-facilities.jpg", width: 1800 },
  specialty: { file: "capability-specialty.jpg", width: 1800 },
  breakTerminal: { file: "break-terminal.jpg", width: 2600 },
  aboutQuarry: { file: "about-quarry.jpg", width: 1800 },
};

const [source, slot] = process.argv.slice(2);

if (!source || !SLOTS[slot]) {
  console.error(`Usage: node scripts/prepare-photo.mjs <source-file> <slot>`);
  console.error(`Slots: ${Object.keys(SLOTS).join(", ")}`);
  process.exit(1);
}

const { file, width } = SLOTS[slot];
const out = join(process.cwd(), "public", "images", file);
mkdirSync(join(process.cwd(), "public", "images"), { recursive: true });

const input = sharp(source, { failOn: "none" });
const meta = await input.metadata();

await input
  .rotate()
  .resize({ width: Math.min(width, meta.width ?? width), withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toFile(out);

const after = await sharp(out).metadata();
console.log(
  `${basename(source)} -> public/images/${file}  ${meta.width}x${meta.height} to ${after.width}x${after.height}`,
);
