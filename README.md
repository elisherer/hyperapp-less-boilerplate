# hyperapp-less-boilerplate

[![GitHub issues](https://img.shields.io/github/issues/elisherer/hyperapp-less-boilerplate.svg)](https://github.com/elisherer/hyperapp-less-boilerplate/issues)

[HyperApp](https://github.com/hyperapp/hyperapp) Boilerplate with a minimal and convenient stack to work with:
* Build tools*:
  * **Babel 7** - ECMAScript 6 (3 stages)
  * **Webpack 4** - (Together with selected plugins)
  * **ESLint** - Using the recommended preset
  * **LESS** - For stylesheets pre-processing
* Development:
  * [hyperapp-redux-devtools](https://github.com/FrontMen/hyperapp-redux-devtools) - DevTools for debugging
  * [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Analyze your bundle sizes for optimization
* Starter libraries:
  * [html-material-css](https://github.com/elisherer/html-material-css) - Pure html material design (for minimal size)
  * [hyperapp-forms](https://github.com/elisherer/hyperapp-forms) - Form state management

*Cross environments

## Getting started

```bash
npm install
npm start
```

Open your browser on [http://localhost:8080](http://localhost:8080).

Live reload is supplied by `webpack-dev-server` (The browser will refresh when code changes).

## Scripts

|Script|What does it do?|
|---|---|
|`npm run analyze`|Runs `webpack-bundle-analyzer` which will create the report file `dist/report.html`.
|`npm run analyze:profile`|Runs webpack profiling to create an input `stats.json` for [webpack's official analyze tool](http://webpack.github.io/analyse/)
|`npm run build`|Builds the project. The output folder is `dist`.
|`npm start`|Runs `webpack-dev-server` (explained above)
|`npm test`|Outputs 'Not Implemented!'. I leave that to you 😄

## Author

Eli Sherer ([@elisherer](https://twitter.com/elisherer))