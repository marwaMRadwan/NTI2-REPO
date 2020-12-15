// const hello = require('./x.js')
// const x = require('./x.js')
// const validator = require('validator')
// x.hello2()

// console.log(validator.isEmail('marwa@test.com')
// console.log(process.argv)
// x = process.argv[2]
// y = process.argv[4]
// op  =  process.argv[3]
// switch(op){
//     case '+': console.log(+x + +y); break
// }

/*
add task - edit task - delete task - show
*/
//node app.js add --taskTitle=marwa 
tasks = []
const yargs = require('yargs')
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
        tasks.push(
            {
                title:argv.taskTitle, 
                content:argv.taskContent
            })
    }
})
yargs.parse()

console.log(tasks)