let customers = [ ]
let accNumsStart = 21215452114

const validateEmptyData =function (input){
    if(input == null || input == "") return false
}
const validateNegtive =function (input){
    if(input <0) return false
} 
const validateIfNum =function(input){
    if(typeof input  != number) return false
}
const validateIfTxt =function(input){
    if(typeof input  != string) return false
}
const stringMinLength = function(input, len){
    if(input.length<len) return false
}
const stringMaxLength = function(input, len){
    if(input.length>len) return false
}
const validate = function(dataType, input, len=0){
    switch(dataType){
        case 'txt': validateIfTxt(input); break;
        case 'num': validateIfNum(input); break;
        case 'minLen': stringMinLength(input, len); break;
        case 'maxLen': stringMaxLength(input, len); break;
        case 'empty': validateEmptyData(input); break;
        case 'negtive': validateNegtive(input); break;
    }
}
const getInput = function(msg, dataType, options=0){
    data = prompt(msg)
    dataType.forEach(ele=>{
        if(validate(ele.type, data, ele.options) == false) 
        throw new Error ('not valid')
    })
}
const getCustomersData = function(){
    try{
        customer ={
            name    : getInput('please enter your Name', [
                {type:'txt', options:''},
                {type:'minLen', options:6},
                {type: 'maxLen', options:20}
            ]),
            balance : prompt('enter your balance'),
            accNum  : customers.length>0?
            customers[customers.length-1].accNum+1 :
            accNumsStart+1
        }
    
    }
    catch(e){
        console.log(e)
    }
    addCustomer(customer)
}
const addCustomer = function(customer){
    customers.push(customer)
    alert('customer added successfuly')
}
getCustomersData()
getCustomersData()
getCustomersData()
getCustomersData()