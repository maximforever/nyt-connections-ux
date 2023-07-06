## Connections UX Experiment

This app mocks the NYT [Connections](https://www.nytimes.com/games/connections) game and makes a small UX suggestion.

When a user correctly selects a whole category, the cards change color one by one as they bounce, rather than staying gray.

## Tech

This is a simple HTML/SCSS/TS app.

- `script.js` is compiled from `src/script.ts`
- `stylesheet.css` is compiled from `src/stylesheet.scss`

To run:

1. `npm install -g typescript`
2. `npm install -g sass`
3. from root, run `sass --watch src/stylesheet.scss:stylesheet.css & tsc -w`
