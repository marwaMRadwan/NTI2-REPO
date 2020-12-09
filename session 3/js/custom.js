// DOM  BOM 

/* id ==> single    class ==> [] */
// const p = document.querySelector('p')  //p =>tagname p - .x class x -#u id=u
//p .x a 
// p.textContent ="marwa"

//showForm
document.querySelector("#showForm").addEventListener('click', function(e){
    e.target.textContent = "hide form"
    document.querySelector('#addTaskForm').classList.toggle('d-none')
})