const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const conURL = "mongodb://127.0.0.1:27017"
const dbName = "ourDB"
mongoClient.connect(conURL, {useNewUrlParser: true},(err,client)=>{
    if(err) return console.log('db error')
    const db = client.db(dbName)
    db.collection('student').insertMany([    
        { name:"ahmed", class: "d"},
        {name:"hassan"},
        {age:50},
        {name: true}
    ])
})