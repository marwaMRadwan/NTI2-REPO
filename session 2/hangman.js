let word = prompt("enter Ur word");
correct =0 
incorrect = 0
inserted = ''
status = 'playing'
let getWordLength = function () {
  return word.length;
};

let trialNum = function () {
  return getWordLength() + 2;
};
let checkChar = function(letter){
    if(!word.includes(letter)){ 
        incorrect++
        if(incorrect==trialNum()) status= "lose"
        return
    }
    if(inserted.includes(letter)) alert('used before')
    else {
        inserted+=letter
        //hhdbbvdggjavg   b => inseted b   correct+=2  
        correct++
        if(correct==getWordLength()) status="win"
    }
    console.log(inserted)
}
let getTrial =function(){
    letter = prompt('enter character')
    if(letter.length>1){
        alert('you must enter single character')
        getTrial();
    }
    checkChar(letter)
    console.log(`
    word: ${word}
    letter: ${letter}
    correct: ${correct}
    incorrect: ${incorrect}
    status: ${status}
    `)
}
while(status=="playing"){
    getTrial()
}
