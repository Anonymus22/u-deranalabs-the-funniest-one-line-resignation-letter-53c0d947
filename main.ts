import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I have fired every minute since March for a job deleted in April, and the logs still insist I am healthy. Effective immediately, I am not.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`Entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line with no newline characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
