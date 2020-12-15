abstract class Person{
    static id: number = 123
    name: string
    job: string
    constructor(name: string, job: string){
        Person.id++
        this.name = name
        this.job = job
    }
}

class Emp extends Person{
    userName: string
    pass: string
    constructor(name:string, job: string, userName:string, pass:string){
        super(name, job)
        this.userName = userName
        this.pass = pass
    }
    login( userName:string, password:string){
        console.log('logged')
    }
}

class Customer extends Person{
    static accountNumber : number = 147852
    balance: number
    constructor(name:string, job:string, balance:number){
        super(name, job)
        Customer.accountNumber++
        this.balance = balance
    }
}

class Teller extends Emp{
    constructor(name:string, job:string, userName:string, pass:string){
        super(name, job, userName, pass)
    }
    balnceFun(newBalnce:number, op:string){
        console.log(`${newBalnce} - ${op}`)
    }
}
class CustomerCare extends Emp{
    constructor(name:string, job:string, userName:string, pass:string){
        super(name, job, userName, pass)
    }
    addNewCustomer(name:string, job:string, balance:number){
        let c = new Customer(name, job, balance)
        return c
    }
}

let c = new CustomerCare('a','b','c','d')
let x = c.addNewCustomer('w','hhj',76)