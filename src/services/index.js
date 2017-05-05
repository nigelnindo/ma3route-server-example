'use strict';

const ma3routetraffic = require('./ma3routetraffic');

const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);

  app.configure(ma3routetraffic);
};
