const mongodb = require('mongodb');

const client = mongodb.MongoClient;
const databaseURL = "mongodb://localhost:27017/";
const dbname = "shoeBoxdb"

client.connect(databaseURL, function(err, db){
    if(err) throw err;
    const dbo = db.db("shoeBoxdb");

    //will create collection if not yet made
    dbo.createCollection("shoes", function(err,res){
        if(err) throw err;
        console.log("Collection created!");
        db.close();
    })
})