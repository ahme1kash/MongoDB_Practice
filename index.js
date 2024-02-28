const {Mongo_Queries} = require('./query.js')
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const port = 3000;
// Replace the placeholder with your Atlas connection string
const connection_string = "mongodb://localhost:27017";
const database = "policyDB"
const client = new MongoClient(connection_string)
async function connectDb(){
    try{
        app.listen(port,()=>{
            console.log("Server is up and Running",port)
        })
        await client.connect();
        // await client.db(database).command({ ping: 1 });
        const db =  client.db(database)
        console.log(await Mongo_Queries.insert_policy_docs(db))
        // console.log(await Mongo_Queries.insert_claim_docs(db))
        // console.log(await Mongo_Queries.find_all_policyholders(db))
        // console.log(await Mongo_Queries.find_policyholders_by_firstName(db))
        // console.log(await Mongo_Queries.find_policyholders_by_status(db))
        // console.log(await Mongo_Queries.find_policyholders_by_status2(db))
        // console.log(await Mongo_Queries.find_policyholders_by_dobRange(db))
        // console.log(await Mongo_Queries.find_all_claims(db))
        // console.log(await Mongo_Queries.find_claims_by_claimNumber(db))
        // console.log(await Mongo_Queries.find_claims_by_insuredDOB(db))
        // console.log(await Mongo_Queries.update_policyholders_by_firstName(db))
        // console.log(await Mongo_Queries.update_policyholders_by_beneficiaries(db))
        // console.log(await Mongo_Queries.update_relationship_by_id(db))
        // console.log(await Mongo_Queries.update_claim_by_fullName(db))
        // console.log(await Mongo_Queries.update_claim_by_status(db))
        // console.log(await Mongo_Queries.update_claim_by_insuredState(db))
        // console.log(await Mongo_Queries.delete_policyholder_name_starting_A(db))
        // console.log(await Mongo_Queries.delete_claim_byDate(db))
        // console.log(await Mongo_Queries.delete_policyholders_age_above80(db))
        // console.log(await Mongo_Queries.update_policyholders_married_age25(db))
        // console.log(await Mongo_Queries.update_claim(db))

        

       





















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