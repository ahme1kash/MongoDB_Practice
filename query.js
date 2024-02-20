const Mongo_Queries = {
    find_doc:async(db)=>{
    const collection = db.collection("restaurants")
const all_docs =  await collection.find().toArray();
return(all_docs)
},
// 1. Write a MongoDB query to display all the documents in the collection restaurants.
find_docs:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {};
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
find_borough:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {name: 'Corner Bistro'};
    let projection = {'borough':1,'cuisine':1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, 
// but exclude the field _id for all the documents in the collection restaurant.

find_required_fields:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {};
    let projection = {borough:1,cuisine:1,name:1,restaurant_id:1,_id:0}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},

// Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, 
// but exclude the field _id for all the documents in the collection restaurant.
find_required_fields2:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {};
    let projection = {borough:1,name:1,restaurant_id:1,_id:0,"address.zipcode":1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// Write a MongoDB query to display count of all the restaurant which is in the borough Bronx.
find_restautants_borough:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {borough:'Bronx'};
    let projection = {}
    const all_docs =  await collection.countDocuments(query,{projection});
    return(all_docs)
},
// 6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
find_first5_borough:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {borough:'Bronx'};
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).limit(5).toArray();
    return(all_docs)
},
// 7.Write a MongoDB query to display 
// the next 5 restaurants after skipping first 5 which are in the borough Bronx.
find_next5_borough:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {borough:'Bronx'};
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).skip(5).limit(5).toArray();
    return(all_docs)
},
// 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
find_score_more_than_90:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {'grades.score':{$gte:90}};
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},

// 9. Write a MongoDB query to find the restaurants that achieved a score, 
// more than 80 but less than 100.
find_score_more80_less100:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {'grades.score':{$gt:80,$lt:100}};
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 10.  Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.
find_latitude:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"address.coord.0":{$lt:-95.754168}};
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
//11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.
    find_asked1:async(db)=>{
        const collection = db.collection("restaurants")
        let query = {"cuisine":{$ne:"American"},"grades.score":{$gt:70},"address.coord.0":{$lt:-65.754168}};
        let projection = {}
        const all_docs =  await collection.find(query,{projection}).toArray();
        return(all_docs)
    },


// 12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.
// Note : Do this query without using $and operator.
find_asked2:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"cuisine":{$ne:"American"},"grades.score":{$gt:70},"address.coord.1":{$lt:-65.754168}};
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},

// 13. Write a MongoDB query to find the restaurants 
// which do not prepare any cuisine of 'American' and achieved a grade point 
// 'A' not belongs to the borough Brooklyn. 
// The document must be displayed according to the cuisine in descending order.

 find_asked3:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"cuisine":{$ne:"American"},"grades.grade":'A',borough:{$ne:"Brooklyn"}};
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine
//  for those restaurants which contain 'Wil' as first three letters for its name.

find_asked4:async(db)=>{
    const collection = db.collection("restaurants")
    // let query = {'name':/^Wil/i};
    let query = {name:{$regex:/^Wil/}}
    let projection = {"restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},

// 15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.

find_asked5:async(db)=>{
    const collection = db.collection("restaurants")
    // let query = {'name':/^Wil/i};
    let query = {name:{$regex:/ces$/}}
    let projection = {"restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine
//  for those restaurants which contain 'Reg' as three letters somewhere in its name.
find_asked6:async(db)=>{
    const collection = db.collection("restaurants")
    // let query = {'name':/^Wil/i};
let query = {name:{$regex:/.*Reg*./}}
    let projection = {"restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 17. Write a MongoDB query to  find the restaurants which belong to the borough Bronx
//  and prepared either American or Chinese dish.
find_asked7:async(db)=>{
    const collection = db.collection("restaurants")
    // let query = {'name':/^Wil/i};
let query = {cuisine:{$in:['American',"Chinese"]},borough:'Bronx'}
    let projection = {"restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those 
// restaurants which belong 
// to the borough Staten Island or Queens or Bronxor Brooklyn.
find_asked8:async(db)=>{
    const collection = db.collection("restaurants")
    // let query = {'name':/^Wil/i};
let query = {borough:{$in:['Staten Island',"Queens","Bronxor Brooklyn"]}}
    let projection = {"restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine 
// for those restaurants which are not 
// belonging to the borough Staten Island or Queens or Bronxor Brooklyn

find_asked9:async(db)=>{
    const collection = db.collection("restaurants")
    // let query = {'name':/^Wil/i};
let query = {borough:{$nin:['Staten Island',"Queens","Bronxor Brooklyn"]}}
    let projection = {"restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 20. Write a MongoDB query to find the restaurant Id, name, borough 
// and cuisine for those 
// restaurants which achieved a score which is not more than 10.

find_asked10:async(db)=>{
    const collection = db.collection("restaurants")
    // let query = {'name':/^Wil/i};
let query = {'grades.score':{$lte:10}}
    let projection = {"restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 21. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those
//  restaurants which prepared dish except 'American' and 'Chinees'
//  or restaurant's name begins with letter 'Wil'.
find_asked11:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {cuisine:{$nin:["American",'Chinese']}}
    let projection = {"restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants
//  which achieved a grade of "A" and 
// scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..
find_asked12:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {"grades.grade":"A","grades.score":{$eq:11},"grades.date":new Date('2014-08-11T00:00:00Z')}
    let projection = {"restaurant_id" : 1, "name":1,"grades":1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 23. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants 
// where the 2nd element of grades 
// array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
find_asked13:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {"grades.1.grade":"A","grades.score":{$eq:9},"grades.date":new Date('2014-08-11T00:00:00Z')}
    let projection = {"restaurant_id" : 1, "name":1,"grades":1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
// 24. Write a MongoDB query to find the restaurant Id, name, address and geographical
//  location for those restaurants where
//  2nd element of coord array contains a value which is more than 42 and upto 52..
find_asked14:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {"address.coord.1":{$gte:42,$lte:52}}
    let projection = {"restaurant_id" : 1, "name":1,"address":1,'coord':1}
    const all_docs =  await collection.find(query,{projection}).toArray();
    return(all_docs)
},
//  25.Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
find_asked15:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {}
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).sort({name:1}).toArray();
    return(all_docs)

},
// 26. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns.
find_asked16:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {}
    let projection = {}
    const all_docs =  await collection.find(query,{projection}).sort({name:-1}).toArray();
    return(all_docs)

},
// 27. Write a MongoDB query to arranged the name of the cuisine in ascending order
//  and for that same cuisine borough should be in descending order.
find_asked17:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).sort({name:1,borough:-1}).toArray()
    return all_docs
},
// 28. Write a MongoDB query to know whether all the addresses contains the street or not.

find_asked18:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"address.street":{$exists:true }} 
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},

// 29 . Write a MongoDB query which will select all documents in the restaurants 
// collection where the coord field value is Double.
find_asked19:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"address.coord":{$type:"double" }} 
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants
//  which returns 0 as a remainder after dividing the score by 7.
find_asked20:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"grades.score":{$mod:[7,0]}} 
    let projection = {restaurant_id:1,name:1,grades:1}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},

// 31. Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those
//  restaurants which contains 'mon' as three letters somewhere in its name.
find_asked21:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {name:{$regex:/mon/}}
    let projection = {borough:1,name:1,'address.coord':1,cuisine:1}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
//32. Write a MongoDB query to find the restaurant name,
//  borough, longitude and latitude and cuisine for those restaurants 
// which contain 'Mad' as first three letters of its name.

find_asked22:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {name:{$regex:/^Mad/}}
    let projection = {borough:1,name:1,'address.coord':1,cuisine:1}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 33. Write a MongoDB query to find the restaurants
//  that have at least one grade with a score of less than 5.
find_asked23:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {'grades.score':{$lt:5}}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},

// 34. Write a MongoDB query to find the restaurants that have at least one grade with a score
//  of less than 5 and that are located in the borough of Manhattan.
find_asked24:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$and:[{'grades.score':{$lt:5}},{borough:"Manhattan"}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 35. Write a MongoDB query to find the restaurants that have at least one grade with a score of
//  less than 5 and that are located in the borough of Manhattan or Brooklyn.

find_asked25:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$and:[{'grades.score':{$lt:5}},{borough:{$in:["Manhattan","Brooklyn"]}}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 36. Write a MongoDB query to find the restaurants that have at least one grade
//  with a score of less than 5 and that are located in the borough
//  of Manhattan or Brooklyn, and their cuisine is not American.
find_asked26:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$and:[{'grades.score':{$lt:5}},{borough:{$in:["Manhattan","Brooklyn"]}},{cuisine:{$ne:"American"}}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 37. Write a MongoDB query to find the restaurants that have at least one grade
//  with a score of less than 5 and that are located in the borough of Manhattan or Brooklyn,
//  and their cuisine is not American or Chinese.
find_asked27:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$and:[{'grades.score':{$lt:5}},{borough:{$in:["Manhattan","Brooklyn"]}},{cuisine:{$in:["American","Chinese"]}}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 38. Write a MongoDB query to find the restaurants that have a grade 
// with a score of 2 and a grade with a score of 6.

find_asked28:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$and:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 39. Write a MongoDB query to find the restaurants that have a grade with a score of 2 and a grade
//  with a score of 6 and are located in the borough of Manhattan.
find_asked29:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$and:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}},{borough:"Manhattan"}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 40. Write a MongoDB query to find the restaurants 
// that have a grade with a score of 2 and a grade with a score of 6 and are 
// located in the borough of Manhattan or Brooklyn.
find_asked30:async(db)=>{
    const collection = db.collection("restaurants")
    // let query = {$and:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}},{$or:[{borough:"Manhattan"},{borough:"Brooklyn"}]}]}
    let query = {$and:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}},{borough:{$in:["Manhattan","Brooklyn"]}}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 41. Write a MongoDB query to find the restaurants that have a grade 
// with a score of 2 and a grade with a score of 6 and are located in the
//  borough of Manhattan or Brooklyn, and their cuisine is not American.
find_asked31:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$and:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}},{borough:{$in:["Manhattan","Brooklyn"]}},{cuisine:{$ne:"American"}}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 42. Write a MongoDB query to find the restaurants that have a grade 
// with a score of 2 and a grade with a score of 6 and are located
//  in the borough of Manhattan or Brooklyn, and their cuisine is not American or Chinese.

find_asked32:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$and:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}},{borough:{$in:["Manhattan","Brooklyn"]}},{cuisine:{$nin:["American","Chinese"]}}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},

// 43. Write a MongoDB query to find the restaurants that have a grade with a score of 2 or a grade with a score of 6.
find_asked33:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$or:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 44. Write a MongoDB query to find the restaurants that have a grade with a score of 2 or
//  a grade with a score of 6 and are located in the borough of Manhattan.
find_asked34:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$or:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}}],borough:"Manhattan"}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 45. Write a MongoDB query to find the restaurants that have a grade with 
// a score of 2 or a grade with a score of 6 and are
//  located in the borough of Manhattan or Brooklyn.

find_asked35:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$or:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}}],borough:{$in:["Manhattan","Brooklyn"]}}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 46. Write a MongoDB query to find the restaurants that have a grade with 
// a score of 2 or a grade with a score of 6 and are
//  located in the borough of Manhattan or Brooklyn, and their cuisine is not American.
find_asked36:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$or:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}}],borough:{$in:["Manhattan","Brooklyn"]},cuisine:{$ne:"American"}}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 47. Write a MongoDB query to find the restaurants that have a grade with a score of 2 or a grade
//  with a score of 6 and are located in the borough of Manhattan or Brooklyn,
//  and their cuisine is not American or Chinese.
find_asked37:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {$or:[{'grades.score':{$eq:2}},{'grades.score':{$eq:6}}],borough:{$in:["Manhattan","Brooklyn"]},cuisine:{$nin:["American","Chinese"]}}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 48. Write a MongoDB query to find the restaurants that have all grades with a score greater than 5. --Good Question

find_asked38:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"grades":{$not:{$elemMatch:{"score": {$lte: 5}}}}}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},

// 49. Write a MongoDB query to find the restaurants that have all grades
//  with a score greater than 5 and are located in the borough of Manhattan.

find_asked39:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"grades":{$not:{$elemMatch:{"score": {$lte: 5}}}},borough:"Manhattan"}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},
// 50. Write a MongoDB query to find the restaurants that have all grades with a score greater
//  than 5 and are located in the borough of Manhattan or Brooklyn.
find_asked40:async(db)=>{
    const collection = db.collection("restaurants")
    let query = {"grades":{$not:{$elemMatch:{"score": {$lte: 5}}}},$or:[{borough:"Manhattan"},{borough:"Brooklyn"}]}
    let projection = {}
    const all_docs = await collection.find(query,{projection}).toArray()
    return all_docs
},


}
module.exports = {Mongo_Queries}