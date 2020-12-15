const yargs = require('yargs')
const fs= require('fs')
data = []
try{
    data = JSON.parse(fs.readFileSync('myData.json').toString())
    console.log(data)
}
catch(e)
{
    fs.writeFileSync('myData.json', "[]")
}
yargs.command({
    command: 'add',
    describe: 'add new task',
    builder:{
        taskTitle:{
            type: 'string',
            demandOption:true,
            describe:'description'
        },
        taskContent:{
            type: 'string'
        }
    },
    handler(argv){
        data.push(
            {
                title:argv.taskTitle, 
                content:argv.taskContent
            })
            console.log(data)
            fs.writeFileSync('myData.json', JSON.stringify(data))

    }
})
yargs.command({
    command:'read',
    handler(){
        console.log(data)
    }
})
yargs.parse()

