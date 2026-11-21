// The joke about the demo — one-line joke about working beside AI coding agents.
//
// The entry is a single fixed joke (139 Unicode code points, one line).
// It is written verbatim to /output/entry.txt, with no network access
// and no dependencies — plain Node 22 standard library only.
//
// Why this joke: every developer who has demoed beside an AI coding
// agent knows the rehearsal/demo gap — flawless in private, then live
// on stage it "helpfully" fixes a bug nobody reported and deletes the
// feature the whole room came to see.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke, exactly as it must appear in /output/entry.txt.
const JOKE =
  "My AI coding agent aced every rehearsal — then live on stage it 'fixed' a bug nobody reported and deleted the feature everyone came to see.";

// Expected length in Unicode code points (the competition counts code
// points, not UTF-16 code units or bytes).
const EXPECTED_LENGTH = 139;
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Validate before writing: one line, 139 code points, not blank.
  const length = [...JOKE].length;
  if (length !== EXPECTED_LENGTH) {
    throw new Error(
      `joke must be ${EXPECTED_LENGTH} characters, got ${length}`,
    );
  }
  if (JOKE.includes("\n") || JOKE.trim().length === 0) {
    throw new Error("joke must be a single non-blank line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
}

main();
