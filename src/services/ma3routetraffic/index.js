'use strict';


const ma3routetraffic = require('./ma3routetraffic-model');
const hooks = require('./hooks');
const Mongo = require('./../../utils/Mongo')

class TrafficService{

  constructor(){
    this.mongo = new Mongo();
    this.COLLECTION_NAME = "trafficupdates";
  }

  find(params){
    /**
    * Return all documents in the database
    **/
    return this.mongo.getDocuments(this.COLLECTION_NAME);
  }

  get(id,params){
    /**
    * Return documents matching specific id
    **/
    return Promise.resolve([]);
  }
}

module.exports = function() {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/ma3routetraffic', new TrafficService());

  // Get our initialize service to that we can bind hooks
  const ma3routetrafficService = app.service('/ma3routetraffic');

  // Set up our before hooks
  ma3routetrafficService.before(hooks.before);

  // Set up our after hooks
  ma3routetrafficService.after(hooks.after);
};
