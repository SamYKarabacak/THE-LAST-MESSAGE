# Development notes

## Source layout

`index.html` is the complete game: story, state handling, interface, styles, visuals, and Web Audio sound. Edit it directly and open the same file to play. There is no build step.

For consistent save storage while testing, serve the repository over HTTP:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. A file URL and a localhost URL may use different save storage.

## Tests

```sh
node --test tests/*.test.cjs
```

The included suite checks script syntax, legal story transitions, reachability of all four endings, save restoration, and choice timing.

Before a release, play through the game in a browser and check keyboard controls, audio, responsive layout, and save/reload behavior. The source tests do not cover those interactions.

## Earlier screenshot captures

Earlier captures used Chromium's document-content API. The storage warning was hidden in those captures only; the game itself retained normal storage handling. Those images show layout and do not establish file-navigation, save, or device compatibility.

## Rights

See [COPYRIGHT.md](COPYRIGHT.md). The story and ending conditions are visible in the source, so expect spoilers.
