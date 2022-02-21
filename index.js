
const buttonElem = document.querySelector(".btn");
const msgBox = document.querySelector(".message");

let randomNumber = Math.ceil((Math.random() * 100))
// var guessNumber = inputBox.value;



buttonElem.addEventListener("click",function(){
    
    comparedGuess(); 
    
    // if(guessNumber>randomNumber){
    //     msgBox.innerHTML= 'Your guess is too high';
    // }
    // else if(guessNumber<randomNumber){
    //     msgBox.innerHTML= 'Your guess is too low';
    // }
    // else{
    //     msgBox.innerHTML=`Correct, the secret number is ${guessNumber}`
    // }
    
});


function comparedGuess(){
    let guessNumber = document.getElementById("inputBox").value;
    if(guessNumber>randomNumber){
        msgBox.innerHTML= 'Your guess is too high';
    }
    else if(guessNumber<randomNumber){
        msgBox.innerHTML= 'Your guess is too low';
    }
    else{
        msgBox.innerHTML=`Correct, the secret number is ${guessNumber}`
    }  
}


