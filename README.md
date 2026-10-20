# THE LAST MESSAGE

**Some things should stay unsent.**

A message arrives at 2:17 a.m. The sender knows what is in your kitchen and
what you have been trying to forget. Your replies decide where the night leads.

[Play on itch.io](https://samykar.itch.io/the-last-message)

## The game

- A branching horror story with four endings, including a hidden route.
- A phone interface, room visuals, and sound made with the Web Audio API.
- Keyboard controls and settings for audio, text, motion, and pacing.
- Local saves, a transcript, an ending collection, and progress export/import.

## Play locally

Download or clone the repository and open `index.html` in a modern browser.
Everything needed to play is in that file.

For more consistent browser storage, serve the folder locally:

```sh
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). JavaScript must be enabled.
Some browsers restrict saves when opening a file directly; use progress
export/import to keep a separate copy.

## Source and tests

The game uses HTML, CSS, and JavaScript, with styles, visuals, and sound code
embedded in `index.html`. There is no build step or external runtime dependency.

Run the repository smoke tests with Node.js:

```sh
node --test tests/*.test.cjs
```

They check script syntax, story transitions, ending reachability, and save
restoration. Browser and device playtesting still need to be done separately.
[Repository notes](docs.md) describe the test scope and screenshot captures.

The source contains the full story and all ending conditions, so expect spoilers.

## Credits

**Game created by BravenDev · Author: SamYKar**

© 2026 SamYKar. All rights reserved.
See [COPYRIGHT.md](COPYRIGHT.md) for reuse information.
