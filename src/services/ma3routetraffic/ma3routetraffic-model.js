'use strict';

// ma3routetraffic-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ma3routetrafficSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const ma3routetrafficModel = mongoose.model('ma3routetraffic', ma3routetrafficSchema);

module.exports = ma3routetrafficModel;