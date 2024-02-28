const { ObjectId } = require("mongodb");

const Mongo_Queries = {
  //     find_doc:async(db)=>{
  //     const collection = db.collection("restaurants")
  // const all_docs =  await collection.find().toArray();
  // return(all_docs)
  // },
  // 1. Write a MongoDB query to display all the documents in the collection restaurants.
  insert_policy_docs: async (db) => {
    const collection = db.collection("policyHolders");
    let insert_docs =
     [
      {
        insuredFirstName: "John",
        insuredLastName: "Smith",
        age: 35,
        "DateOBirth": "1987-05-20",
        State: "California",
        email: "john.smith@example.com",
        PhoneNumber: "+1 (555) 123-4567",
        Status: "Active",
        Beneficiaries: "Alice Smith",
        Relationship: "Spouse"
      },
      {
        insuredFirstName: "Alice",
        insuredLastName: "Johnson",
        age: 42,
        DateOfBirth: "1980-10-12",
        State: "New York",
        email: "alice.johnson@example.com",
        PhoneNumber: "+1 (555) 987-6543",
        Status: "Active",
        Beneficiaries: "John Doe",
        Relationship: "Spouse"
      },
      {
        insuredFirstName: "Emma",
        insuredLastName: "Brown",
        age: 28,
        DateOfBirth: "1994-07-03",
        State: "Texas",
        email: "emma.brown@example.com",
        PhoneNumber: "+1 (555) 321-7890",
        Status: "Inactive",
        Beneficiaries: "Olivia Brown",
        Relationship: "Child"
      },
      {
        insuredFirstName: "Michael",
        insuredLastName: "Davis",
        age: 45,
        DateOfBirth: "1979-02-15",
        State: "Florida",
        email: "michael.davis@example.com",
        PhoneNumber: "+1 (555) 234-5678",
        Status: "Active",
        Beneficiaries: "Sophia Johnson",
        Relationship: "Parent"
      },
      {
        insuredFirstName: "Sophia",
        insuredLastName: "Wilson",
        age: 32,
        DateOfBirth: "1990-11-30",
        State: "Washington",
        email: "sophia.wilson@example.com",
        PhoneNumber: "+1 (555) 876-5432",
        Status: "Active",
        Beneficiaries: "Michael Davis",
        Relationship: "Child"
      },
      {
        insuredFirstName: "Olivia",
        insuredLastName: "Martinez",
        age: 37,
        DateOfBirth: "1985-08-25",
        State: "Illinois",
        email: "olivia.martinez@example.com",
        PhoneNumber: "+1 (555) 765-4321",
        Status: "Inactive",
        Beneficiaries: "Emma Johnson",
        Relationship: "Parent"
      },
      {
        insuredFirstName: "James",
        insuredLastName: "Miller",
        age: 29,
        DateOfBirth: "1993-04-10",
        State: "Ohio",
        email: "james.miller@example.com",
        PhoneNumber: "+1 (555) 345-6789",
        Status: "Active",
        Beneficiaries: "Sophia Wilson",
        Relationship: "Parent"
      },
      {
        insuredFirstName: "Liam",
        insuredLastName: "Garcia",
        age: 39,
        DateOfBirth: "1983-01-05",
        State: "Michigan",
        email: "liam.garcia@example.com",
        PhoneNumber: "+1 (555) 456-7890",
        Status: "Active",
        Beneficiaries: "Olivia Martinez",
        Relationship: "Child"
      },
      {
        insuredFirstName: "Emma",
        insuredLastName: "Jones",
        age: 33,
        DateOfBirth: "1989-09-18",
        State: "Massachusetts",
        email: "emma.jones@example.com",
        PhoneNumber: "+1 (555) 234-5678",
        Status: "Inactive",
        Beneficiaries: "Liam Garcia",
        Relationship: "Child"
      },
      {
        insuredFirstName: "Noah",
        insuredLastName: "Hernandez",
        age: 36,
        DateOfBirth: "1986-12-22",
        State: "Pennsylvania",
        email: "noah.hernandez@example.com",
        PhoneNumber: "+1 (555) 567-8901",
        Status: "Active",
        Beneficiaries: "James Miller",
        Relationship: "Child"
      },
      {
        insuredFirstName: "Isabella",
        insuredLastName: "Young",
        age: 41,
        DateOfBirth: "1981-06-08",
        State: "Virginia",
        email: "isabella.young@example.com",
        PhoneNumber: "+1 (555) 678-9012",
        Status: "Active",
        Beneficiaries: "Noah Hernandez",
        Relationship: "Parent"
      },
      {
        insuredFirstName: "William",
        insuredLastName: "Lopez",
        age: 27,
        DateOfBirth: "1995-03-17",
        State: "Georgia",
        email: "william.lopez@example.com",
        PhoneNumber: "+1 (555) 789-0123",
        Status: "Inactive",
        Beneficiaries: "Isabella Young",
        Relationship: "Parent"
      },
      {
        insuredFirstName: "Ava",
        insuredLastName: "Clark",
        age: 44,
        DateOfBirth: "1978-07-29",
        State: "Colorado",
        email: "ava.clark@example.com",
        PhoneNumber: "+1 (555) 890-1234",
        Status: "Active",
        Beneficiaries: "William Lopez",
        Relationship: "Child"
      },
      {
        insuredFirstName: "Mason",
        insuredLastName: "Walker",
        age: 30,
        DateOfBirth: "1992-11-03",
        State: "Arizona",
        email: "mason.walker@example.com",
        PhoneNumber: "+1 (555) 901-2345",
        Status: "Active",
        Beneficiaries: "Ava Clark",
        Relationship: "Child"
      },
      {
        insuredFirstName: "Harper",
        insuredLastName: "Lewis",
        age: 38,
        DateOfBirth: "1984-02-14",
        State: "Maryland",
        email: "harper.lewis@example.com",
        PhoneNumber: "+1 (555) 012-3456",
        Status: "Inactive",
        Beneficiaries: "Mason Walker",
        Relationship: "Child"
      },
      {
        insuredFirstName: "Ethan",
        insuredLastName: "Allen",
        age: 31,
        DateOfBirth: "1991-08-05",
        State: "Oregon",
        email: "ethan.allen@example.com",
        PhoneNumber: "+1 (555) 123-4567",
        Status: "Active",
        Beneficiaries: "Harper Lewis",
        Relationship: "Parent"
      },
    ];

    const all_docs = await collection.insertMany(insert_docs);
    return all_docs;
  },
  insert_claim_docs: async (db) => {
    const collection = db.collection("claims");
    let insert_claims = [
      {
        ID: 456789,
        claimNumber: "CLM123456789",
        lineOfBusiness: "Auto",
        insuredFullName: "John Doe",
        insuredFName: "John",
        insuredLName: "Doe",
        insuredDOB: "1980-05-10",
        dateOfDeath: "2023-07-15",
        Status: "Pending",
        effectiveDate: "2023-01-01",
        insuredState: "New York",
      },
      {
        ID: 234567,
        claimNumber: "CLM987654321",
        lineOfBusiness: "Homeowners",
        insuredFullName: "Alice Smith",
        insuredFName: "Alice",
        insuredLName: "Smith",
        insuredDOB: "1975-09-20",
        dateOfDeath: null,
        Status: "Approved",
        effectiveDate: "2022-11-15",
        insuredState: "California",
      },
      {
        ID: 345678,
        claimNumber: "CLM567890123",
        lineOfBusiness: "Health",
        insuredFullName: "Emily Johnson",
        insuredFName: "Emily",
        insuredLName: "Johnson",
        insuredDOB: "1992-03-08",
        dateOfDeath: null,
        Status: "Denied",
        effectiveDate: "2023-04-30",
        insuredState: "Texas",
      },
      {
        ID: 567890,
        claimNumber: "CLM234567890",
        lineOfBusiness: "Life",
        insuredFullName: "Michael Brown",
        insuredFName: "Michael",
        insuredLName: "Brown",
        insuredDOB: "1988-12-15",
        dateOfDeath: null,
        Status: "Pending",
        effectiveDate: "2024-01-01",
        insuredState: "Florida",
      },
      {
        ID: 789012,
        claimNumber: "CLM789012345",
        lineOfBusiness: "Auto",
        insuredFullName: "Sophia Wilson",
        insuredFName: "Sophia",
        insuredLName: "Wilson",
        insuredDOB: "1965-06-25",
        dateOfDeath: null,
        Status: "Pending",
        effectiveDate: "2023-09-10",
        insuredState: "Michigan",
      },
      {
        ID: 901234,
        claimNumber: "CLM345678901",
        lineOfBusiness: "Homeowners",
        insuredFullName: "Daniel Martinez",
        insuredFName: "Daniel",
        insuredLName: "Martinez",
        insuredDOB: "1970-11-18",
        dateOfDeath: null,
        Status: "Approved",
        effectiveDate: "2022-08-20",
        insuredState: "Texas",
      },
      {
        ID: 123456,
        claimNumber: "CLM901234567",
        lineOfBusiness: "Health",
        insuredFullName: "Olivia Jones",
        insuredFName: "Olivia",
        insuredLName: "Jones",
        insuredDOB: "1982-04-05",
        dateOfDeath: null,
        Status: "Denied",
        effectiveDate: "2023-03-15",
        insuredState: "California",
      },
      {
        ID: 234567,
        claimNumber: "CLM456789012",
        lineOfBusiness: "Life",
        insuredFullName: "David Taylor",
        insuredFName: "David",
        insuredLName: "Taylor",
        insuredDOB: "1976-09-30",
        dateOfDeath: null,
        Status: "Approved",
        effectiveDate: "2022-12-01",
        insuredState: "New York",
      },
      {
        ID: 345678,
        claimNumber: "CLM012345678",
        lineOfBusiness: "Auto",
        insuredFullName: "Emma Garcia",
        insuredFName: "Emma",
        insuredLName: "Garcia",
        insuredDOB: "1990-02-10",
        dateOfDeath: null,
        Status: "Pending",
        effectiveDate: "2023-05-05",
        insuredState: "Texas",
      },
      {
        ID: 456789,
        claimNumber: "CLM678901234",
        lineOfBusiness: "Homeowners",
        insuredFullName: "William Brown",
        insuredFName: "William",
        insuredLName: "Brown",
        insuredDOB: "1979-07-12",
        dateOfDeath: null,
        Status: "Approved",
        effectiveDate: "2022-10-01",
        insuredState: "Florida",
      },
    ];
    const all_docs = await collection.insertMany(insert_claims);
    return all_docs;
  },


//   Query from policyHolders Collection
  find_all_policyholders:async(db)=>{
    const collection = db.collection("policyHolders")
    let query = {}
    let docs = await collection.find(query).toArray()
    return docs

  },


  find_policyholders_by_firstName:async(db)=>{
    const collection = db.collection("policyHolders")
    let firstName = "Daniel"
    let query = {insuredFirstName:firstName}
    let docs = await collection.find(query).toArray()
    return docs
  },

  find_policyholders_by_status1:async(db)=>{
  const collection = db.collection("policyHolders")
    let status = true
    let query = {Status:status}
    let docs = await collection.find(query).toArray()
    console.log("Policyholders with active account are following:-")
    return docs
  },
  find_policyholders_by_status2:async(db)=>{
  const collection = db.collection("policyHolders")
    let status = false
    let query = {Status:status}
    let docs = await collection.find(query).toArray()
    console.log("Policyholders with Inactive account are following:-")
    return docs
  },

find_policyholders_by_dobRange:async(db)=>{
    const collection = db.collection("policyHolders")
    let date1 = '1980-11-01'
    let date2 = '1990-11-01'
    // console.log(date1)
    let query = {DateOfBirth:{$gt:date1,$lt:date2}}
    let docs = await collection.find(query).toArray()
    return docs
},



//   Query from claims Collection
find_all_claims:async(db)=>{
    const collection = db.collection("claims")
    let query = {}
    let docs = await collection.find(query).toArray()
    return docs

  },
find_claims_by_claimNumber:async(db)=>{
    const collection = db.collection("claims")
    let claimNumber = "CLM012345678"
    let query = {claimNumber:claimNumber}
    let docs = await collection.find(query).toArray()
    return docs

},
find_claims_by_insuredDOB:async(db)=>{
    const collection = db.collection("claims")
    let insuredDOB = '1975-09-20'
    let query = {insuredDOB:insuredDOB}
    let docs = await collection.find(query).toArray()
    return docs

},
find_claims_with_dateofdeath:async(db)=>{
    const collection = db.collection("claims")
    let death_date = "2023-07-15"
    let query = {dateOfDeath:death_date}
    let docs = await collection.find(query).toArray()
    return docs
},
// (4) Update policyholders with at least 3 parameters separately

update_policyholders_by_firstName:async(db)=>{
    const collection = db.collection("policyHolders")
    let firstName = "Nicholas"
    let query = {insuredFirstName:"Tony"}
    let modify = {$set:{insuredFirstName:firstName}}
    let docs = await collection.updateOne(query,modify)
    return docs
},
update_policyholders_by_beneficiaries:async(db)=>{
    const collection = db.collection("policyHolders")
    let new_beneficiary_name = "Zainab Qureshi"
    let query = {'Beneficiaries.name':"Junaid Khan"}
    let modify = {$set:{'Beneficiaries.$.name':new_beneficiary_name}}
    let docs = await collection.updateOne(query,modify)
    // console.log(docs)
    return docs
},
update_relationship_by_id:async(db)=>{
    const collection = db.collection("policyHolders")
    let new_relationship="Niece"
    let query = {_id:new ObjectId('65ddd979073a840703d9dde6')}
    let modify = {$set:{'Relationship':new_relationship}}
    let docs = await collection.findOneAndUpdate(query,modify)
    return docs
},


// (5) Update claims with at least 3 parameters separately
update_claim_by_fullName:async(db)=>{
    const collection = db.collection("claims")
    let modifiedfullName = "Akash Sharma"
    let query = {"insuredFullName":"John Doe"}
    let modify = {$set:{insuredFullName:modifiedfullName}}
    let docs = await collection.findOneAndUpdate(query,modify)
    return docs
},
update_claim_by_status:async(db)=>{
    const collection = db.collection("claims")
    let query = {claimNumber:"CLM789012345",Status:"Denied"}
    let modify = {$set:{Status:"Approved"}}
    let docs = await collection.findOneAndUpdate(query,modify)
    return docs

},
update_claim_by_insuredState:async(db)=>{
    const collection = db.collection("claims")
    let query = {insuredFullName:"Emma Garcia",insuredState:"Texas"}
    let modify = {$set:{insuredState:"Kentucky"}}
    let docs = await collection.findOneAndUpdate(query,modify)
    return docs
},

// (7) Delete the PolicyHolder by name starting with letter A.
delete_policyholder_name_starting_A:async(db)=>{
    const collection = db.collection("policyHolders")
    let query = {insuredFirstName:{$regex:/^A/}}
    let docs = await collection.deleteOne(query)
    return docs
},
// (8) Delete a claim which was created on a particular date.
delete_claim_byDate:async(db)=>{
    const collection = db.collection("claims")
    let query = {effectiveDate:"2022-12-01"}
    let docs = await collection.deleteOne(query)
    return docs
},
// (9) Delete all from PolicyHolders collection who have age greater than “ 80”
delete_policyholders_age_above80:async(db)=>{
    const collection = db.collection("policyHolders")
    let query = {age:{$gt:80}}
    let docs = await collection.deleteMany(query)
    return docs
},
// 10 Update the PolicyHolders Relationship to Married where Age is > 25.
update_policyholders_married_age25:async(db)=>{
    const collection = db.collection("policyHolders")
    let query = {age:{$gt:24}}
    let modify = {$set:{Relationship:"Married"}}
    let docs = await collection.updateMany(query,modify)
    return docs
},
// 11 Update the claims where dateOfDeath is 1 year before the current date
update_claim:async(db)=>{
    const collection = db.collection("claims")
    // let date = JSON.stringify(new Date())
    // let year = date.slice(1,5)
    // let month =  date.slice(6,8)
    // let date_month = date.slice(9,11)
    // let last_year_date = year-1 + "-" + month + "-" + date_month
    const current_date = new Date();
    const last_year_date = new Date(current_date.getFullYear() - 1, current_date.getMonth(), current_date.getDate());
    let query = {dateOfDeath:{$lt:last_year_date}}
    // console.log(query)
    let modify = {$set:{Status:"Denied"}}
    let docs = await collection.updateMany(query,modify)
    return docs
}
}
module.exports = { Mongo_Queries };
