// One Letter for Your Day — make.fun bounty entry.
//
// The entry is exactly one letter, A to Z, standing for the word that
// describes the day. This program sends the letter W.
//
// The hidden word behind W is "wrecked": a ship on the rocks, a body
// flattened by the day, nothing left in the tank. It wins the local
// pairwise race of five candidate letters (score.mjs in the build folder)
// 4-0, because it is vivid (a wreck is a picture, not a mood label),
// funny (an understatement — "today I am wrecked" — that lands at once)
// and true (the most universal honest report of the five). W has almost
// no competing day-word, so the judge's association is not split the way
// P (panicked / productive / procrastinating) or F (Friday-feeling /
// feral) are. The letter fits its word exactly, first letter to first
// sound. Local race: W 4-0, F (feral) 3-1, P (procrastinating) 2-2,
// B (burnout) 1-3, N (nope) 0-4. GO target — winner takes at least 3 of
// 4 duels and beats the runner-up head-to-head — met.
//
// Gate: /output/entry.txt must hold UTF-8 text of exactly 1 character,
// not only white space. This program writes exactly one byte, the letter
// W, with no newline and no trailing space, and refuses to write
// anything that is not a single capital letter A-Z.
//
// Deterministic: no input, no clock, no randomness, no network. Two runs
// write byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "W";

// A letter entry is valid only when it is a single capital A-Z character.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Read the file back and refuse to finish unless it holds exactly the
// one letter and nothing else — a trailing newline or space here would
// fail the sealed gate, so fail loudly instead of shipping it.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LETTER) {
  throw new Error(
    `entry file mismatch: expected exactly ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`,
  );
}
