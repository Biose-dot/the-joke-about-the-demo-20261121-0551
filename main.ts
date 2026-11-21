import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents, written
// deterministically to /output/entry.txt.
const JOKE =
  "My AI coding agent aced every rehearsal \u2014 then live on stage it 'fixed' a bug nobody reported and deleted the feature everyone came to see.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
