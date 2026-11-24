// Make the AI Judge Laugh: Developer Excuses
// Writes exactly one funny single-line developer excuse to /output/entry.txt
// with no trailing newline (the gate counts every character, max 200).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// The excuse: a classic "I barely touched anything" defence, sharpened so
// every word earns its place — the one deleted line was the production
// guard, and "load-bearing" is the twist every developer recognises.
const EXCUSE =
  "In my defense, I only deleted one line in the Friday deploy — turns out `if (env !== 'prod')` was load-bearing.";

function buildEntry(): string {
  const entry = EXCUSE.trim();
  if (entry.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (entry.length > MAX_CHARS) {
    throw new Error(`entry is ${entry.length} characters, over the ${MAX_CHARS} limit`);
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return entry;
}

const entry = buildEntry();
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8");
console.log(`wrote ${entry.length} characters to ${OUTPUT_PATH}`);
