// DOM  BOM 

/* id ==> single    class ==> [] */
// const p = document.querySelector('p')  //p =>tagname p - .x class x -#u id=u
//p .x a 
// p.textContent ="marwa"
tasks = JSON.parse(localStorage.getItem('tasks')) || []
taskTypeas = ['t1', 't2', 't3']
temp =""
taskTypeas.forEach(type=>{
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
})

const newElement = function(eleType, eleContent, eleClasses, eleContentType='txt'){
    ele = document.createElement(eleType)
    if(eleContentType=='txt') ele.textContent = eleContent
    else ele.innerHTML = eleContent
    eleClasses.forEach(c=> ele.classList.add(c))
    return ele
}

const displayTasks = function(){
    tasks.forEach(task => {
        const bgColor = task.status ? 'bg-warning':'bg-success'
        const article = newElement('article','',[bgColor, 'p-3', 'col-md-3', 'col-12', 'my-4', 'text-white'])
        const p = newElement('p', task.taskContent, [])
        const h2 = newElement('h2', task.taskTitle, ['h4'])
        const btnDel = newElement('button', 'delete', ['btn', 'btn-danger'])
        const btnEdit = newElement('button', 'Edit', ['btn','btn-info'])
        // article.appendChild(h2)
        // article.appendChild(p)
        // article.appendChild(btnDel)
        // article.appendChild(btnEdit)
        article.innerHTML = (h2.outerHTML + p.outerHTML + btnEdit.outerHTML + btnDel.outerHTML)
        document.querySelector('#tasks div').appendChild(article)
    });

}


displayTasks()