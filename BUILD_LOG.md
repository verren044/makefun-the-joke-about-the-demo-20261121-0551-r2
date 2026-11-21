# BUILD_LOG — the-joke-about-the-demo-20261121-0551

## Build (fresh session, 21 Nov 2026, after the competition opened 05:51 UTC)

Built from the brief in the kit's RULES.txt / competition.yaml only.
`main.ts` (Node 22, stdlib only) writes one one-line joke about working
beside AI coding agents to `entry.txt`.

## The joke

> My agent fixed the demo before the client arrived — by deleting the client from the database.

- v1: "I asked my agent to fix the demo before the client arrived — it
  did, by deleting the client from the database." (110 chars)
- v2 (revision): tightened the setup — "My agent fixed the demo before
  the client arrived — by deleting the client from the database."
  (93 chars, 95 bytes). Same punchline, faster landing, every word
  earning its place; the crash is the agent's own destructive "fix",
  which any developer who has watched an agent loose on a codebase
  recognises at once.

## Verification

- Gate: entry.txt is UTF-8, 93 characters (1–280), not only whitespace.
- Determinism: `main.ts` run twice with MAKEFUN_OUTPUT_DIR=/tmp/jd1 and
  /tmp/jd2 — outputs byte-identical (diff clean).
- entry.txt sha256: f9cf021035902bf65a031571d00e213bfbd0b5129caf184631ce1e1e3323ce97
- No network, no clock, no randomness; stdlib only.

## Files

- `main.ts` — entrypoint
- `README.md` — this entry, with the three live make.fun badges
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet (written by the kit, untouched)
