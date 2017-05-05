const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;

class Mongo {

  constructor(){
    this.MONGO_CONNECTION_URL = 'mongodb://localhost:27017/ma3route';
  }

  getDocuments(dbName, collectionName){

    return new Promise((resolve, reject) => {

      console.log("Get documents function called");

      MongoClient.connect(this.MONGO_CONNECTION_URL,
        function(err,db){

            if(err){
              reject(err);
            }

            const collection = db.collection(collectionName);

            collection.find({}).toArray(function(err,docs){
              if(err){
                reject(err);
              }

              resolve(docs);
            });

            //close MongoDb connection after query
            db.close();

      });

    });

  }

  insertDocuments(dbName, collectionName, documents){

    console.log("insert document function called");

    return new Promise((resolve,reject) => {

      mongoClient.open(this.MONGO_CONNECTION_URL,
        function(err, mongoClient){
        if (err){
          reject(err);
        }

        const collection = db.collection(collectionName);

        collection.insertMany(documents, function(err, result){
          if(err){
            reject(err);
          }
          resolve(result);
        });

        db.close();

      });

    });

  }

}

module.exports = Mongo;
