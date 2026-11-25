// makefun-one-line-out-of-office
// Writes the funniest one-line out-of-office reply to <outputDir>/entry.txt.
// Deterministic: no network, no randomness, no wall-clock, stdlib only.
// Usage: node main.ts [outputDir]   (default outputDir is "/output")
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. Chosen because it reads exactly like a real away message
// ("I'm out until Monday") and then turns the inbox into the usurper:
// the inbox has taken over the job, and the team prefers it. The punch
// lands on the first read, it is self-deprecating rather than a bolted-on
// joke, and it avoids the beach / overflowing-inbox / "limited email
// access" cliches. No name or signature is needed for it to make sense.
const ENTRY =
  "I'm out until Monday. My inbox has taken over my job and, frankly, the team prefers it.";

const MAX_CHARS = 160;

// Gate self-check, mirroring the competition gate: UTF-8 text of 1-160
// characters, a single line, not only whitespace, no trailing newline.
function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry is empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, over the ${MAX_CHARS} cap`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("entry has leading or trailing whitespace");
  }
  // Round-trip through UTF-8 to prove the text is valid UTF-8.
  const bytes = Buffer.from(text, "utf8");
  if (bytes.toString("utf8") !== text) {
    throw new Error("entry is not valid UTF-8");
  }
}

function main(): void {
  // The output directory is the first argument, defaulting to /output,
  // which is where the grader expects entry.txt. A local run can pass a
  // different directory to keep runs side by side for comparison.
  const outputDir = process.argv[2] ?? "/output";
  validate(ENTRY);
  mkdirSync(outputDir, { recursive: true });
  // No trailing newline: the character count is the line itself.
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
