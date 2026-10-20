# Repository notes

## Game file

`index.html` contains the story, engine, interface, styles, and embedded visuals.
The repository was imported from the existing offline release. Text edits are
made in this file; it remains the entry point for local play.

## Tests

Run `node --test tests/*.test.cjs` from the repository root.

The included smoke tests check JavaScript syntax, the story graph, all four
endings, save restoration, and choice timing. Earlier release notes mentioned
a separate 40-test development suite; those test files are not included here.
The repository tests cover the checks listed above.

## Screenshot captures

Earlier screenshots were rendered in Chromium through its document-content
API. File and localhost navigation were unavailable during that capture session.
The local-storage warning was hidden for the captures only; the game retained
the warning and its normal storage handling.

Those captures do not verify file navigation, hosted saves, or browser/device
compatibility. Check those in a running browser before a release.
