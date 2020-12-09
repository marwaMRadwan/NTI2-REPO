// DOM  BOM 

/* id ==> single    class ==> [] */
// const p = document.querySelector('p')  //p =>tagname p - .x class x -#u id=u
//p .x a 
// p.textContent ="marwa"
tasks = JSON.parse(localStorage.getItem('tasks')) || []
taskTypes = ['t1', 't2', 't3']
temp =""
taskTypes.forEach(type=>{
    temp  +=`<option value=${type}>${type}</option>`
})
document.querySelector('select').innerHTML+=temp
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
    localStorage.setItem('tasks', JSON.stringify(tasks))
    e.target.reset()
    displayTasks()
    document.querySelector("#showForm").textContent="Add New Task"
    document.querySelector('#addTaskForm').classList.add('d-none')    

})
const newElement = function(eleType, eleContent, eleClasses, eleContentType='txt'){
    ele = document.createElement(eleType)
    if(eleContentType=='txt') ele.textContent = eleContent
    else ele.innerHTML = eleContent
    eleClasses.forEach(c=> ele.classList.add(c))
    return ele
}
const displayTasks = function(){
    document.querySelector('#tasks div').textContent=""
    if(tasks.length==0){
        div = newElement('article','No Data Found',['col-12'])
        document.querySelector('#tasks div').appendChild(div)
        return
    }
        tasks.forEach( (task, i) => {
            const bgColor = task.status ? 'bg-warning':'bg-success'
            const article = newElement('article','',[bgColor, 'p-3', 'col-md-3', 'col-12', 'my-4', 'text-white'])
            const p = newElement('p', task.taskContent, [])
            const h2 = newElement('h2', task.taskTitle, ['h4'])
            const btnDel = newElement('button', 'delete', ['btn', 'btn-danger'])
            const btnEdit = newElement('button', 'Edit', ['btn','btn-info'])
            //btnEdit.addEventListener('click',function(e){console.log(i)})
            article.appendChild(h2)
            article.appendChild(p)
            article.appendChild(btnDel)
            article.appendChild(btnEdit)
            //article.innerHTML = (h2.outerHTML + p.outerHTML + btnEdit.outerHTML + btnDel.outerHTML)
            document.querySelector('#tasks div').appendChild(article)
            editTask(btnEdit, i)
            delTask(btnDel, i)
    
        });

}
editTask = function(btn, i){
    btn.addEventListener('click', function(e){
        tasks[i].status = !tasks[i].status
        localStorage.setItem('tasks',JSON.stringify(tasks))
        displayTasks()
    })
}
delTask = function(btn, i){
    btn.addEventListener('click', function(e){
        tasks.splice(i,1)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        displayTasks()

    })
}
displayTasks()