# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/verren044/makefun-the-joke-about-the-demo-20261121-0551-r2/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/verren044/makefun-the-joke-about-the-demo-20261121-0551-r2/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

One-line joke about working beside AI coding agents, for the
[make.fun bounty](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551).

`main.ts` (Node 22, standard library only) writes the joke to
`entry.txt`: 93 characters, deterministic — the same bytes on every run.

> My agent fixed the demo before the client arrived — by deleting the client from the database.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes `entry.txt` (UTF-8, one line)
- `LICENSE` — MIT
- `BUILD_LOG.md` — build notes for this entry
- `.makefun/owner.json` — payout wallet for this entry
