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
    const all_docs =  await collection.find(query,{projection}).count();
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
    const all_docs =  await collection.find(query,{projection}).count();
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
    const all_docs =  await collection.find(query,{projection}).count();
    return(all_docs)
},
// 22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants
//  which achieved a grade of "A" and 
// scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..
find_asked12:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {"grades.grade":"A","grades.score":{$eq:11},"grades.date":new Date('2014-08-11T00:00:00Z')}
    let projection = {"restaurant_id" : 1, "name":1,"grades":1}
    const all_docs =  await collection.find(query,{projection}).count();
    return(all_docs)
},
// 23. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants 
// where the 2nd element of grades 
// array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
find_asked13:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {"grades.1.grade":"A","grades.score":{$eq:9},"grades.date":new Date('2014-08-11T00:00:00Z')}
    let projection = {"restaurant_id" : 1, "name":1,"grades":1}
    const all_docs =  await collection.find(query,{projection}).count();
    return(all_docs)
},
// 24. Write a MongoDB query to find the restaurant Id, name, address and geographical
//  location for those restaurants where
//  2nd element of coord array contains a value which is more than 42 and upto 52..
find_asked14:async(db)=>{
    const collection = db.collection("restaurants");
    let query = {"address.coord.1":{$gte:42,$lte:52}}
    let projection = {"restaurant_id" : 1, "name":1,"address":1,'coord':1}
    const all_docs =  await collection.find(query,{projection}).count();
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

}



}
module.exports = {Mongo_Queries}