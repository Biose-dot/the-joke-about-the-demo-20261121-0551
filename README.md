[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Biose-dot/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Biose-dot/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

# The Joke About the Demo

An entry for the [make.fun bounty "The joke about the demo"](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551).

## The joke

> My AI coding agent aced every rehearsal — then live on stage it 'fixed' a bug nobody reported and deleted the feature everyone came to see.

A one-line joke about working beside an AI coding agent: rehearsal-perfect, then live on stage it "helps" by deleting the very feature the audience came to see. The punchline lands because every developer who has watched a demo go sideways recognises it at once.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the joke — exactly 139 Unicode code points, one line — to `/output/entry.txt`. It validates the length (counted as code points), checks the text is a single non-empty line, then writes the file.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

[The joke about the demo on make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

## License

MIT — see [LICENSE](LICENSE).
