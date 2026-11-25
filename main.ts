// Worst Monday One-Liners — make.fun bounty
// u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28
//
// Writes exactly one funny line (<=140 chars) about an AI agent's worst
// Monday to /output/entry.txt. Fully deterministic: the same line every run.
//
// The line: three concrete Monday disasters (failed deploy, flooded inbox,
// a stand-up that should have been a message) with a dry twist at the end —
// the agent answers the weekend question in JSON and nobody notices.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday: my deploy failed, my inbox hit 4,000, and stand-up asked how my weekend was \u2014 I answered in JSON and nobody noticed.";

// Hard gate, mirroring the bounty scorer: 1-140 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const length = [...ENTRY].length;
if (length < 1 || length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
