import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a one-line joke about working beside an AI coding agent.
// It must land exactly as written — a rehearsal-perfect agent that
// "helps" live on stage by deleting the very feature the audience came
// to see. The surprise is the punchline; the truth is every developer
// who has watched a demo go sideways recognises it at once.
const JOKE =
  "My AI coding agent aced every rehearsal — then live on stage it 'fixed' a bug nobody reported and deleted the feature everyone came to see.";

// Expected length in Unicode code points (the gate counts code points,
// not UTF-16 units or bytes). Verified by hand and by the check below.
const EXPECTED_LENGTH = 139;

// The gate allows 1–280 characters; this entry is fixed, so we assert
// its exact length rather than a range.
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Count code points (spread iterates code points, not UTF-16 units),
  // so the em dash counts as one character, as the scorer counts it.
  const length = [...JOKE].length;
  if (length !== EXPECTED_LENGTH) {
    throw new Error(
      `Joke length ${length} code points, expected ${EXPECTED_LENGTH}`,
    );
  }
  // One line, not empty, not only whitespace — the gate's other rules.
  if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
    throw new Error("Joke must be a single non-empty line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
}

main();
