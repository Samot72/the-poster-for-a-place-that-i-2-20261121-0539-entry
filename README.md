# Lumara — Where the Tide Keeps the Time

[![make.fun bounty](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/c/the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/Samot72/the-poster-for-a-place-that-i-2-20261121-0539-entry/rank.svg)](https://make.fun/c/the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/Samot72/the-poster-for-a-place-that-i-2-20261121-0539-entry/reward.svg)](https://make.fun/c/the-poster-for-a-place-that-i-2-20261121-0539)

A vintage travel poster, in the manner of a 1930s railway poster, for a place
that does not exist: **Lumara**, the floating harbour city where the tide
keeps the time.

## The poster

A huge low coral sun hangs over layered teal waves. In the middle distance
the whole city rides on one great hull deck on stilts: domed houses in cream,
ochre and teal, a striped lighthouse sweeping its beam across the sun, and
laundry strung on a line between the houses. In front, a small boat with one
red sail crosses the harbour. The name LUMARA is set in very large
letterspaced capitals at the top, with the tagline "WHERE THE TIDE KEEPS THE
TIME", and a railway-poster footer strip at the bottom.

## Invented geography

Lumara is the capital of **Virelai**, a tide-locked coast that exists only on
this poster. The city floats: its houses stand on hulls and stilts, its
lighthouse marks the harbour mouth, and its clocks are set by the ebb rather
than by hands. The **Virelai Coastal Railway** runs three trains daily with
the ebb, and the return fare to Lumara is 12 crowns. No real place names and
no real brands appear anywhere in the picture.

## How it was made

- `poster.html` holds the whole artwork as one inline SVG (flat shapes, a
  limited palette — deep teal sea, cream sky, coral sun, ink-navy outlines —
  no external assets).
- The page was screenshot with headless Chrome at exactly 1024×1024 to
  produce the committed `entry.png` (85,335 bytes, within the 1 MiB gate).
- `main.ts` is the entry program: it copies the committed `entry.png` into
  the output directory and verifies the copy's length and SHA-256, failing
  loudly on any mismatch — so both grading runs write identical bytes.

## Files

- `main.ts` — the entry program (Node 22, zero dependencies, no network).
- `entry.png` — the poster image the program writes to `/output/entry.png`.
- `poster.html` — the SVG source the poster was rendered from.
- `LICENSE` — MIT.

## Run it

```sh
node main.ts                                  # writes /output/entry.png
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts      # or choose the output dir
```
