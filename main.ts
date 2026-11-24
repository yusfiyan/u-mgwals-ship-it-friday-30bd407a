// Ship It Friday — make.fun entry for repo yusfiyan/u-mgwals-ship-it-friday-30bd407a
// Writes one commit message: the funniest line an AI coding agent types
// right before breaking production on a Friday.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "fix: delete prod database to free up disk space \u2014 tests green, merging Friday, see you in the incident channel";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters,
// not only white space.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} fails the 1-159 char gate`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, "utf8");
