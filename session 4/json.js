const fs = require('fs')
// data =[{"name":"marwa"}]
// fs.writeFileSync('data.json',JSON.stringify(data))

data = JSON.parse(fs.readFileSync('data.json').toString())
console.log(data)