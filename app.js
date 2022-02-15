let number = document.getElementById("number");
let check = document.getElementById("check");
let result = document.getElementById("result");
let attempt = document.getElementById("count");
let background = document.getElementById("background")

let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);


let closestBig = 100;
let closestLow = 0;

function findingNumber() { 
    if (randomNumber == number.value) {
        console.log("You are WINNER!!!");
        result.innerHTML = "You are WINNER!!!";
        check.disabled = true;
        attempt.style.display = "none";
        result.style.color = "white";
        result.style.fontSize = "5rem";
        background.style.backgroundImage = "url('./images/360_F_313567283_QjchzH0ulf1ho1b2Ff0uYg5R3yr7ks91.jpg')"
    }else if (number.value > randomNumber) {
        if(number.value >100){
            result.innerHTML = "please enter a number less than 100";
            number.value = "";
            return} 
        if (closestBig > number.value) {
            closestBig = number.value
        };
        result.innerHTML = `Enter a number between ${closestLow} and ${closestBig}`
    }else if (number.value < randomNumber) {
        if(number.value < 0){
            result.innerHTML = "Enter a number greater than 0";
            number.value = "";
            return};
        if (closestLow < number.value) {
            closestLow = number.value
        };
        result.innerHTML = `Enter a number between ${closestLow} and ${closestBig}`
    }else if(number.value == "") {
        result.innerHTML =`Please enter a Number`
    };

     
};


check.addEventListener("click", findingNumber);


let count = 5;

function countFunction() {
    count--;
    attempt.innerHTML = `Number of remaining attempts ${count}`;
    console.log(number.value);

    if (count == 0 && (randomNumber !== +(number.value)) ) {
        attempt.innerHTML = `sorry you lost`;
        attempt.style.color = `aqua`;
        attempt.style.fontSize = `10rem`;
        background.style.backgroundImage ="url('./images/40vsdjoubza3g36.jpg')"

        check.disabled = true;
        result.style.display = "none"
    }
    number.value = "" 
}

check.addEventListener("click", countFunction);

