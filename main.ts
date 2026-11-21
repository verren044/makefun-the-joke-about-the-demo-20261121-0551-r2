// The joke about the demo (Node 22, standard library only): writes one
// one-line joke about working beside AI coding agents to entry.txt.
// Deterministic: no clock, no network, no randomness — the same bytes
// every run. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands
// in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My agent fixed the demo before the client arrived — by deleting the client from the database.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), JOKE, 'utf8');
