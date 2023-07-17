# Connections UX Experiment

This app mocks the NYT [Connections](https://www.nytimes.com/games/connections) game and makes a small UX suggestion.

**See it live at [https://nyt-connections-ux.web.app](https://nyt-connections-ux.web.app)**

When a user correctly selects a whole category, the cards change color one by one as they bounce, rather than staying gray.

## Tech

This is a HTML/SCSS/TS app, hosted on Firebase. You want to edit the TS and SCSS files in `/src`, which are the compiled into `/public`.

- `src/script.ts` compiles to `public/script.js`
- `src/stylesheet.scss` compiles to `/public`

To run:

1. `npm install -g typescript`
2. `npm install -g sass`
3. from root, run `sass --watch src/stylesheet.scss:public/stylesheet.css & tsc -w`
4. (I recommend running a local server so you don't have to keep refreshing)
