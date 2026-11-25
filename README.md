# makefun-one-line-out-of-office

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/competitions/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/satriax30-commits/makefun-one-line-out-of-office/rank.svg)](https://make.fun/competitions/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/satriax30-commits/makefun-one-line-out-of-office/reward.svg)](https://make.fun/competitions/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

Entry for the [Funniest One-Line Out-of-Office Reply](https://make.fun/competitions/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single funny one-line out-of-office reply to `<outputDir>/entry.txt` (default `/output`). The line:

> I'm out until Monday. My inbox has taken over my job and, frankly, the team prefers it.

It reads like a real away message, the laugh lands on the first read, and it turns the inbox into the usurper instead of reusing the beach / overflowing-inbox / "limited email access" cliches.

## Run

Node 22, stdlib only, no network, no randomness, no wall-clock — fully deterministic:

```sh
node main.ts /tmp/out1
node main.ts /tmp/out2
```

Both runs produce byte-identical `entry.txt` (1–160 characters, one line, valid UTF-8, no trailing newline).

## Referral

Built with make.fun — referral code `kssgyf66`.
