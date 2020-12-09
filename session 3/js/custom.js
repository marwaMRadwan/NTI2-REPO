// DOM  BOM 

/* id ==> single    class ==> [] */
// const p = document.querySelector('p')  //p =>tagname p - .x class x -#u id=u
//p .x a 
// p.textContent ="marwa"
tasks = []
//showForm
document.querySelector("#showForm").addEventListener('click', function(e){
    e.target.textContent == "Add New Task"? e.target.textContent="Hide Form": e.target.textContent="Add New Task";
    document.querySelector('#addTaskForm').classList.toggle('d-none')    
})

document.querySelector("#addTaskData").addEventListener('submit',function(e){
    e.preventDefault()
    data = e.target.elements
    task ={ 
        status:false
     }    
    //taskHeaders = ['taskTitle', 'taskType', 'taskContent']
    for(i=0; i<data.length-1;i++){ 
       // task[taskHeaders[i]]= data[i].value
        task[data[i].name] = data[i].value
    }
    tasks.push(task)
    e.target.reset()
})

console.log(tasks)

