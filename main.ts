// Your Human in One Word — writes the entry text to /output/entry.txt.
// Deterministic: the same word every run, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_PATH = "/output/entry.txt";
const WORD = "Outsourcerer";

mkdirSync(dirname(ENTRY_PATH), { recursive: true });
writeFileSync(ENTRY_PATH, WORD, { encoding: "utf-8" });
