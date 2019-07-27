# ⚛ React Sandbox - React starter project

[![Maintainability](https://api.codeclimate.com/v1/badges/de5f9bb6aee97358e60e/maintainability)](https://codeclimate.com/github/caiodesign/react-sandbox/maintainability)
[![dependencies Status](https://david-dm.org/caiodesign/react-sandbox/status.svg)](https://david-dm.org/caiodesign/react-sandbox)
[![Known Vulnerabilities](https://app.snyk.io/test/github/caiodesign/react-sandbox/badge.svg)](https://app.snyk.io/test/github/caiodesign/react-sandbox)
[![GitHub issues](https://img.shields.io/github/issues/caiodesign/react-sandbox.svg)](https://github.com/caiodesign/react-sandbox/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/caiodesign/react-sandbox.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fcaiodesign%2Freact-sandbox)

## TOC

-   [Motivation](#motivation)
-   [Features](#features)
-   [Todo](#todo)
-   [Installation](#installation)

## Motivation

A simple boilerplate project without `create-react-app` with my favourite packages for developing front-end stuffs.

If you have any questions you can always [open an issue on Github](https://github.com/caiodesign/react-sandbox/issues) or reach out to me on [Twitter](https://www.twitter.com/caiooliveiradev)!

## Features

This project has out-of-the-box support for the following things:

-   General Setup
    -   🔥 Babel 7
    -   🔥 Webpack 4
    -   🔥 Jest 24
    -   ✅ Hot Module Reloading (HMR)
    -   📕 Support for [Storybook](https://storybook.js.org/) (>= 4.0.0)

*   Libs and Dependencies
    -   ⚛ React 16.x (latest), with Hooks!
    -   ✅ Redux + Redux Saga middleware
    -   ✅ React i18next for multi language support

## Todo
-   [ ] ESLint 5
-   [ ] Flow Type
-   [ ] Prettier
-   [ ] React Router 4
-   [ ] React Helmet
-   [ ] Styled Components
-   [ ] Precommit hooks via lint-staged + Husky

## Installation

As a general recommendation you should create a **fork** of this project first so you can adjust it to your own needs, add all the dependencies you need and commit everything back into your repository.

Once you've forked the repository here on Github, clone it, `cd` into the directory and run `yarn` (or `npm install`) on your command line to install all the dependencies. You're ready to go now!

Noteworthy npm scripts:

#### `yarn start`

Starts the app in development mode: creates a new client and server dev build using webpack, starts the Express server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.

#### `yarn build`

Creates a new build, optimized for production. Does **not** start a dev server or anything else.

#### `yarn test`

Run all tests using jest.

## License

MIT.
