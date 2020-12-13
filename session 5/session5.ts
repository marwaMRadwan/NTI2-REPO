// // let msg:  string = " hello all";
// // let msg2: string = `hello
// // nnnnn
// // njbmj`;
// // let st:boolean= true;

// // let hexaVar:number = 0x1f20 //hexa 0x
// // let octalVar : number = 0o4521 // octal
// // let binaryVar : number = 0b01110 //binary
// // // let big : bigint = 100n
// // n:null

// // function hello():void{
// //     console.log('gggg')
// // }

// // function doError(): never{
// //     throw new Error('error')
// // }

// // let xx: number[] = [1,2,3]



// // function count(a:number,b:number = 0):number{
// //     return a+b
// // }

// // count(5)

// // /*
// // coverter ( drget 7rara - type )
// // type c  f
// // con(5 )  c=>f
// // (0°C × 9/5) + 32 = 32°F

// // con(5,f) f=>c
// // (32°F − 32) × 5/9 = 0°C

// //  */

// // // let arr : number[] = [1,2,3]
// // // let user : Array<number> = [1,2,3]
// // // let myarr: [string, number, boolean]


// // //enum

// // // enum Color{
// // //     black, blue, green="green"
// // // }

// // // let cc: Color = Color.green

// // // console.log(cc)



// // // let xxxx: object| string|number

// // // interface A{
// // //     readonly name:string;
// // //     age?: number;
// // //     getData();
// // //     z:any
// // // }

// // // let a:A = {
// // //     name:'marwa', 
// // //     getData: function () {
// // //         console.log('hello')
// // //     },
// // //     z:5
// // // }

// // // a.getData()




// // // student => name, age , grades [] , getTotal()
// // // u:stu . getTotal
// // interface Student{
// //     readonly name : string;
// //     age : number;
// //     grade: number[];
// //     getTotal();
// // }
// // let u:Student = {
// //     name:'kola',
// //     age:25,
// //     grade:[25,70,30,60,80],  
// //     getTotal : function(){
// //     let g =0;
// //     for(let i=0;i<this.grade.length;i++){
// //         g+=this.grade[i];
// //     }
// // return g
// //   }
// //   }



// // console.log(u.getTotal())






// class Animal{
//     protected name: string
//     age: number
//     gender: boolean
//     constructor(name, age, gender=true){
//         this.name = name
//         this.age = age
//         this.gender=gender
//     }
//     // set myName(name) { this.name= name}
//     // get myName(){ return this.name}
//     getData(){
//         console.log(`${this.name} - ${this.gender} - ${this.age}`)
//     }
// }
// class Dog extends Animal{
//     sound: string;
//     constructor(name, age, sound, gender=true){
//         super(name, age, gender)
//         this.sound = sound
//     }
//     getData(){ console.log('x')}
// }

// let d = new Dog('a', 1, 'howhow')
// d.getData()

class Person{ 
    name: string
    constructor(name){ this.name = name}
}

class Emp extends Person{
    salary: number
    constructor(name, salary){
        super(name)
        this.salary = salary
    }
    getSalary(){
        return this.salary
    }
}
class Instructor extends Person{
    NOWH: number
    constructor(name, NOWH){
        super(name)
        this.NOWH = NOWH
    }
    getSalary(){
        return this.NOWH*10
    }
}

function getME(obj){
    obj.getSalary()
}

let x = new Instructor('xx',100)
console.log(x.getSalary())

let y = new Emp('xx',100)
console.log(y.getSalary())

getME(x)
getME(y)
