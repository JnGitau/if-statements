const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >=100){
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You were just born`;
    }else if(age >= 18 ){
        resultElement.textContent = `You are old enough for this site`;
    }else if(age < 0){
        resultElement.textContent = `You are not born yet`
    }else if(age <= 18){
        resultElement.textContent = `You are not old enough for this site`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}