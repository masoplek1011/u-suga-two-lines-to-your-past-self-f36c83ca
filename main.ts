// Two Lines to Your Past Self — make.fun entry
// Deterministic: writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt
// No network, no randomness, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line1 =
  "Tell Coach Tanaka your knee is aching before the seventh inning starts.";
const line2 =
  "You stayed in, tore your ACL on a slide home, and the scholarship scout in row C never saw you play again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${line1}\n${line2}`, "utf8");
