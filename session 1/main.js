// x = 5;
// x = "ahmed"
// x=true
// x=3.5
// x="hello"
// x=false
// x = [1,2,3]
// y = 5
// console.log(y)
//x()

// var showMe = function(){
//     return 5
//     }
// console.log(showMe())


// function x(){
//     console.log('dhsgghdh')
// }
// showMe()

// console.log(x)


//function (){return 5} ()
// x on another server 10 sec  console x
// showMe




//part 2
//var

/* primitive data types  numbers, string, boolean 
datastructures  array object, ....
*/
// x=5
// x= [1,2,3,4,5] 
// x[2]=17
// y = [1,'marwa', true, 3.5]
// console.log(x)
// x.length
// for(i=0; i<x.length; i++) console.log(x[i])
// x.pop()
// console.log(x)
// x.shift()
// console.log(x)
// x.splice(2,-2)
// console.log(x)
// x.unshift('new')
// console.log(x)

arr = [1,5,3,4,5,6,5,8,9,10]

arr.forEach((element, i) => {
    console.log(`${i+1} - ${element}`)
});
// 5=='5' true   5==='5' false
// filter find findIndex
const index = arr.filter(function(element, ind){
    return element === 5
})

console.log(index)

user = {
    name: "marwa",
    age: 15,
    salary:2000
}

console.log(user.name)
