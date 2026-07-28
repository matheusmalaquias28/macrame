/**
 * Gera macrame-hero.webp a partir do JPEG original.
 * Rode após trocar a imagem hero: node scripts/optimize-hero.mjs
 */
import sharp from "sharp";
import { existsSync } from "node:fs";

const input = "public/macrame-hero.jpeg";
const output = "public/macrame-hero.webp";

if (!existsSync(input)) {
  console.warn(`[optimize-hero] ${input} não encontrado — pulando.`);
  process.exit(0);
}

const info = await sharp(input).resize(828).webp({ quality: 75 }).toFile(output);
console.log(`[optimize-hero] ${output} (${Math.round(info.size / 1024)} KiB, ${info.width}px)`);
