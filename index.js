const {Mongo_Queries} = require('./query.js')
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const port = 3000;
// Replace the placeholder with your Atlas connection string
const connection_string = "mongodb://localhost:27017";
const database = "RestaurantsDB"
const client = new MongoClient(connection_string)
async function connectDb(){
    try{
        app.listen(port,()=>{
            console.log("Server is up and Running",port)
        })
        await client.connect();
        // await client.db(database).command({ ping: 1 });
        const db =  client.db(database)
        // console.log(await Mongo_Queries.find_docs(db))
        // console.log(await Mongo_Queries.find_borough(db))
        // console.log(await Mongo_Queries.find_required_fields(db))
        // console.log(await Mongo_Queries.find_required_fields2(db))
        // console.log(await Mongo_Queries.find_restautants_borough(db))
        // console.log(await Mongo_Queries.find_first5_borough(db))
        // console.log(await Mongo_Queries.find_next5_borough(db))
        // console.log(await Mongo_Queries.find_score_more_than_90(db))
        // console.log(await Mongo_Queries.find_score_more80_less100(db))
        // latitudes = await Mongo_Queries.find_latitude(db)
        // console.log(await Mongo_Queries.find_asked1(db))
        // console.log(await Mongo_Queries.find_asked2(db))
        // console.log(await Mongo_Queries.find_asked3(db))
        // console.log(await Mongo_Queries.find_asked4(db))
        // console.log(await Mongo_Queries.find_asked5(db))
        // console.log(await Mongo_Queries.find_asked6(db))
        // console.log(await Mongo_Queries.find_asked7(db))
        // console.log(await Mongo_Queries.find_asked8(db))
        // console.log(await Mongo_Queries.find_asked9(db))
        // console.log(await Mongo_Queries.find_asked10(db))
        // console.log(await Mongo_Queries.find_asked11(db))
        // console.log(await Mongo_Queries.find_asked12(db))
        // console.log(await Mongo_Queries.find_asked13(db))
        // console.log(await Mongo_Queries.find_asked14(db))
        // console.log(await Mongo_Queries.find_asked15(db))
        console.log(await Mongo_Queries.find_asked16(db))

       





















        console.log("Connected Successfully.")

        // const collection = client.db(database).collection(collection_name)
        // // module.exports = collection
        
    }
    catch(err){
        console.log(err)
    }
    finally{
        await client.close();
        console.log("Connection Closed")
        
    }
}
connectDb();
module.exports = connectDb;