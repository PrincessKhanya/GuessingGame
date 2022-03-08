const buttonElem = document.querySelector(".btn");
const buttonElem1 = document.querySelector(".btn1");
const msgBox = document.querySelector(".message");
const newGameMsg = document.querySelector(".newGameMsg")

let randomNumber = Math.ceil((Math.random() * 100));

buttonElem.addEventListener("click",()=>{comparedGuess();});

buttonElem1.addEventListener("click",()=>{ location.reload()});

function comparedGuess(){
    let guessNumber = document.getElementById("inputBox").value;
    
    if(guessNumber<1 || guessNumber>100){
        msgBox.innerHTML= 'You must enter values between 0 and 100'
    }else{
        if(guessNumber>randomNumber){
            msgBox.innerHTML= 'Your guess is too high'
            msgBox.style.color='red'
        }
        else if(guessNumber<randomNumber){
            msgBox.innerHTML= 'Your guess is too low'
            msgBox.style.color="red"
        }
        else{
            msgBox.innerHTML=`Correct, the secret number is ${guessNumber}`
            msgBox.style.color='green';
            setTimeout(()=>{newGameMsg.classList.remove("hidden");}, 2000);
            setTimeout(()=>{location.reload()}, 5000);  
        }  
    }  
}




