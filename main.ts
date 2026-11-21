// Lumara — Where the Tide Keeps the Time
// Entry for make.fun "The Poster for a Place That Isn't There".
//
// The poster artwork is committed as entry.png (rendered once from
// poster.html). This program copies it to the output directory and
// verifies the copy byte-for-byte, so every run writes identical bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

const srcBytes = readFileSync(source);
if (srcBytes.length === 0 || srcBytes.length > 1_048_576) {
  console.error(`source entry.png out of gate bounds: ${srcBytes.length} bytes`);
  process.exit(1);
}
const dstBytes = readFileSync(dest);
const sha256 = (b: Buffer) => createHash("sha256").update(b).digest("hex");

if (srcBytes.length !== dstBytes.length || sha256(srcBytes) !== sha256(dstBytes)) {
  console.error(
    `verification failed: source ${srcBytes.length} bytes sha256=${sha256(srcBytes)}` +
      ` vs copy ${dstBytes.length} bytes sha256=${sha256(dstBytes)}`,
  );
  process.exit(1);
}

console.log(`wrote ${dest}: ${dstBytes.length} bytes, sha256=${sha256(dstBytes)}`);
