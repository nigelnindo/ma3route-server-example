const Mongo = require('./Mongo');
const ma3sdk = require('ma3route-sdk');

class Ma3RoutePoller{

  constructor(){

    this.mongo = new Mongo();
    this.COLLECTION_NAME = "trafficupdates";

    ma3sdk.utils.setup({
      key: process.env.MA3_API_KEY,
      secret: process.env.MA3_API_SECRET,
      });

    /**
    * Poll for new updates in Nairobi[townId: 1] after every 5 minutes.
    * Tweak interval as required.
    **/

    setInterval(() => {
      console.log("Polling for new updates");
      this.getTrafficUpdates({townId: 1});
    }, 5 * 1000 * 60 );

  }

  /**
  * Pass GET request parameters as getParams. Defaults to empty object
  **/
  getTrafficUpdates(getParams = {}){
    ma3sdk.trafficUpdates.get(function(err, updates) {
      if (err) {
          console.log("something went wrong: %s", err);
          return;
        }
        console.log("got some updates: %j", updates);

        /**
        * Store retrieved traffic updates to MongoDb
        **/

        this.mongo.insertDocuments(this.COLLECTION_NAME, updates)
          .then( res => console.log("traffic updates stored saved to database"))
          .catch( err => {
            console.error("Error saving traffic updates to database:");
            console.error(err);
          });

        return;
    }.bind(this));
  }

}

module.exports = Ma3RoutePoller;
