const webpackServeWaitpage = require('webpack-serve-waitpage');

module.exports = {
  add: (app, middleware, options) => {
    app.use(webpackServeWaitpage(options, { theme: 'material' }));
  }
};
