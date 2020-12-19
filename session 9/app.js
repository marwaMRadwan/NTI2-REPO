// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient
// const objectid = mongodb.ObjectID

const {MongoClient, ObjectID } = require('mongodb')
const conURL = "mongodb://127.0.0.1:27017"
const dbName = "ourDB"
MongoClient.connect(conURL, {useNewUrlParser: true},(err,client)=>{
    if(err) return console.log('db error')
    const db = client.db(dbName)
    // db.collection('student')
    // .updateOne({_id: new ObjectID("5fddbdf6c03c992d649ab01f")}
    // ,{$set:{name:"hassan"}})
    // .then(result=> console.log(result))
    // .catch(e=>console.log(e))   
    
    // db.collection('student')
    // .updateMany({}
    // ,{$inc:{age:10}})
    // .then(result=> console.log(result))
    // .catch(e=>console.log(e))    
db.collection('student').deleteMany({age:30}).then(res=>console.log(res))
.catch(e=>console.log(e))

})

    // db.collection('student')
    // .findOne({
    //     _id: new ObjectID("5fddbdf6c03c992d649ab01f")},
    //  (err,data)=>{console.log(data)})
    // })
    //     db.collection('student').find({name:"ahmed"}).toArray((err, data)=>{
    //         console.log(data)
    //     })
    // })

    // db.collection('student').insertMany([    
    //     { name:"ahmed", class: "d"},
    //     {name:"hassan"},
    //     {age:50},
    //     {name: true}
    // ])

