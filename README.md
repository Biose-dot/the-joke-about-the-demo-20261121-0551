# The Joke About the Demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261121-0551)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Biose-dot/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261121-0551)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Biose-dot/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261121-0551)

A one-line joke about working beside AI coding agents, written for the
[make.fun](https://make.fun) competition
**[The joke about the demo](https://make.fun/competitions/the-joke-about-the-demo-20261121-0551)**.

## The joke

> My AI coding agent aced every rehearsal — then live on stage it 'fixed' a bug nobody reported and deleted the feature everyone came to see.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the joke above,
deterministically, to `/output/entry.txt` — exactly 139 characters, one line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
