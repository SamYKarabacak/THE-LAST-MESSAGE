# THE LAST MESSAGE

**Some things should stay unsent.**

**THE LAST MESSAGE** is an original browser-based psychological horror story about an unexpected message at 2:17 a.m. and the consequences of replying. The experience combines branching dialogue, narrative decisions, an unsettling atmosphere, and four discoverable endings.

**[Play the released game on itch.io](https://samykar.itch.io/the-last-message)**

## Features

- Branching interactive horror story with four endings, including a hidden route.
- Atmospheric interface, narrative visuals, and procedurally generated sound.
- Keyboard-friendly choices and configurable audio, text, motion, and pacing.
- Local save/continue functionality, transcript, ending collection, and progress export/import.
- A self-contained HTML5 experience with no accounts, external packages, or online services required for gameplay.

## Play locally

Download or clone this repository and open `index.html` in a modern browser. To test browser storage consistently, you can also serve the directory locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. JavaScript must be enabled. Browser restrictions may affect local saving when opening `index.html` directly; the game includes progress export and import.

## Tech stack

**HTML5 · CSS3 · Vanilla JavaScript · Web Audio API**

The distributed game is intentionally built as one portable `index.html` file with embedded styles, script, and visual assets. There is no build step and no third-party runtime dependency.

## Gameplay preview

[View the playable game and artwork on itch.io](https://samykar.itch.io/the-last-message).

## Verification

Run the included dependency-free source and narrative smoke tests with Node.js:

```bash
node --test tests/*.test.cjs
```

These tests examine the embedded story engine and narrative transitions. They do **not** replace full playtesting across browsers or devices.

## Credits

**Created by Sam Y. Karabacak**

© 2026 Sam Y. Karabacak. All rights reserved. See [COPYRIGHT.md](COPYRIGHT.md) for reuse information.

## Links

- [Play THE LAST MESSAGE](https://samykar.itch.io/the-last-message)
- [Creator on GitHub](https://github.com/SamYKarabacak)

> **Spoiler notice:** The game's narrative, branch conditions, and ending data are present in the source code.