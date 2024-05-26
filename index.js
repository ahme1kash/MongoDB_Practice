const { Mongo_Queries } = require("./query.js");
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const port = 3000;
// Replace the placeholder with your Atlas connection string
const connection_string = "mongodb://localhost:27017";
const database = "RestaurantsDB";
const client = new MongoClient(connection_string);
async function connectDb() {
  try {
    app.listen(port, () => {
      console.log("Server is up and Running", port);
    });
    await client.connect();
    // await client.db(database).command({ ping: 1 });
    const db = client.db(database);
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
    // console.log(await Mongo_Queries.find_asked16(db))
    // console.log(await Mongo_Queries.find_asked17(db))
    // console.log(await Mongo_Queries.find_asked18(db))
    // console.log(await Mongo_Queries.find_asked19(db))
    // console.log(await Mongo_Queries.find_asked20(db))
    // console.log(await Mongo_Queries.find_asked21(db))
    // console.log(await Mongo_Queries.find_asked22(db))
    // console.log(await Mongo_Queries.find_asked23(db))
    // console.log(await Mongo_Queries.find_asked24(db))
    // console.log(await Mongo_Queries.find_asked25(db))
    // console.log(await Mongo_Queries.find_asked26(db))
    // console.log(await Mongo_Queries.find_asked27(db))
    // console.log(await Mongo_Queries.find_asked28(db))
    // console.log(await Mongo_Queries.find_asked29(db))
    // console.log(await Mongo_Queries.find_asked30(db))
    // console.log(await Mongo_Queries.find_asked31(db))
    // console.log(await Mongo_Queries.find_asked32(db))
    // console.log(await Mongo_Queries.find_asked33(db))
    // console.log(await Mongo_Queries.find_asked34(db))
    // console.log(await Mongo_Queries.find_asked35(db))
    // console.log(await Mongo_Queries.find_asked36(db))
    // console.log(await Mongo_Queries.find_asked37(db))
    // console.log(await Mongo_Queries.find_asked38(db))
    // console.log(await Mongo_Queries.find_asked39(db))
    // console.log(await Mongo_Queries.find_asked40(db))
    // console.log(await Mongo_Queries.find_asked41(db))
    // console.log(await Mongo_Queries.find_asked42(db))
    // console.log(await Mongo_Queries.find_asked43(db))
    // console.log(await Mongo_Queries.find_asked44(db))
    // console.log(await Mongo_Queries.find_asked45(db))
    // console.log(await Mongo_Queries.find_asked46(db))
    // console.log(await Mongo_Queries.find_asked47(db))
    // console.log(await Mongo_Queries.find_asked48(db))
    // console.log(await Mongo_Queries.find_asked_(db))
    // console.log(await Mongo_Queries.find_asked49(db))
    // console.log(await Mongo_Queries.find_asked50(db))
    // console.log(await Mongo_Queries.find_asked51(db))
    // console.log(await Mongo_Queries.find_asked52(db));
    // console.log(await Mongo_Queries.find_asked53(db));
    // console.log(await Mongo_Queries.find_asked54(db));
    // console.log(await Mongo_Queries.find_asked55(db));
    // console.log(await Mongo_Queries.find_asked56(db));
    console.log(await Mongo_Queries.find_asked57(db));

    console.log("Connected Successfully.");

    // const collection = client.db(database).collection(collection_name)
    // // module.exports = collection
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
    console.log("Connection Closed");
  }
}
connectDb();
module.exports = connectDb;
