# Connections UX Experiment

This app mocks the NYT [Connections](https://www.nytimes.com/games/connections) game and makes a small UX suggestion.

When a user correctly selects a whole category, the cards change color one by one as they bounce, rather than staying gray.

## Tech

This is a HTML/SCSS/TS app, hosted on Firebase.

- `public/script.js` is compiled from `src/script.ts`
- `public/stylesheet.css` is compiled from `src/stylesheet.scss`

To run:

1. `npm install -g typescript`
2. `npm install -g sass`
3. from root, run `sass --watch src/stylesheet.scss:public/stylesheet.css & tsc -w`
4. (I recommend running a local server so you don't have to keep refreshing)
