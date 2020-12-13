// class Person{
//     constructor(name, age){
//         // console.log(`${name} - ${age}`)
//         this.name = name
//         this.age = age
//     }

//     printMe(){
//         console.log(this)
//     }
// }

// let x = new Person('marwa', 35)
// y = new Person('nouran',26)
// x.salary = 5000
// x.printMe()




// class Person{
//     constructor(name, phone, address){
//         console.log('parent')
//         this.name = name
//         this.phone = phone
//         this.address = address
//     }
// }
// class Customer extends Person{
//     constructor(name, phone, address, balance){
//         super(name, phone, address)
//         console.log('child')
//         this.balance=balance
//     }

// }
// class Emp extends Person{
//     constructor(name, phone, address, salary){
//         super(name, phone, address)       
//         this.salary= salary
//     }

// }

// let c = new Customer('a','1','1','jj')

// console.log(c.balance)

//closures
// const myFun =  function() {
//     let x = 0
//     return function(){ x+=2}
// }

// myFun()()

// function myFun(){
//     x=0
//     return{
//         a(){ return 'ana a';},
//         b(){ return 'ana b';},
//         c(){ return 'ana c';},
//         d(){ return 'ana d';}
//     }
// }


// let fun = myFun()

// fun.a()

// myVal = 0
// function valHandeler(){
//     return{
//         adder(){ myVal++ },
//         subtractor(){ myVal-- },
//         getVal(){ return myVal }
//     }
// }


// let myValHandeler = valHandeler()

// myValHandeler.adder()
// myValHandeler.adder()
// myValHandeler.adder()
// myValHandeler.subtractor()
// console.log(myValHandeler.getVal())

// let x = () => console.log('hello')


// const y = x => { return x }




// let myTask = {
//     name: "ahmed",
//     title: "ay 7aga",
//     displayTask : (name = this.name) => { 
//         console.log(name) 
//     }
// }


// myTask.displayTask()


// setTimeout(function(){
// console.log(5000)
// x=3
// console.log(`x inside = ${x}`)
// }, 5000)
// console.log('outside ', x)


// const sum = (a, b)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(a>5000) return reject('error')
//             resolve(a+b)
//         }, 3000)
//     })
// }
// let fun = async()=>{
//     s1 = await sum(2,3)
//     s2= await sum(s1,19)
//     s3 = await sum(6000,10)
//     return s3    
// }
// fun()
// .then(
//     //fun
//     (result)=>{ console.log(result)} 
//     )
// .catch(
//     (e) => console.log(e)
// )








fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-13&sortBy=publishedAt&apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3',{}).then(
    res=>{
    if(res.status == 200){
        return res.json()
    }
    else throw new Error('server error')
})
.then(data =>{
    x = data
    data.forEach(el=>{
        console.log(el)
    })
})
.catch(e=>console.log(e))







