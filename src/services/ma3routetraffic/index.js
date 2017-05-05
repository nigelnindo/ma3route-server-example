'use strict';


const ma3routetraffic = require('./ma3routetraffic-model');
const hooks = require('./hooks');
const Mongo = require('./../../utils/Mongo')

class TrafficService{

  constructor(){
    this.mongo = new Mongo();
    this.DB_NAME = "ma3route";
    this.COLLECTION_NAME = "trafficupdates";
  }

  find(params){
    return this.mongo.getDocuments("ma3route","trafficupdates");
  }

  get(id,params){
    return Promise.resolve([]);
  }
}

module.exports = function() {
  const app = this;

  /*
  const options = {
    Model: ma3routetraffic,
    paginate: {
      default: 5,
      max: 25
    }
  };
  */

  // Initialize our service with any options it requires
  app.use('/ma3routetraffics', new TrafficService());

  // Get our initialize service to that we can bind hooks
  const ma3routetrafficService = app.service('/ma3routetraffics');

  // Set up our before hooks
  ma3routetrafficService.before(hooks.before);

  // Set up our after hooks
  ma3routetrafficService.after(hooks.after);
};
