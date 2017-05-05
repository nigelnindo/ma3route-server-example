'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('ma3routetraffic service', function() {
  it('registered the ma3routetraffics service', () => {
    assert.ok(app.service('ma3routetraffics'));
  });
});
