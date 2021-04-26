let addBtn = document.querySelector(".add");
let clearBtn = document.querySelector(".clear");
let input = document.querySelector(".input");
let output = document.querySelector(".number-plate");
let list = document.getElementById("nList");
let theList = document.querySelector(".list-sect");
let errormess = document.querySelector(".error-message");
let ca = document.querySelector(".ca");
let cl = document.querySelector(".stel");
let cj = document.querySelector(".pa");
let caw = document.querySelector(".geo");

var regFact = regFactFunc();

function regNumber() {
    var radio = document.querySelector("input[name='town']:checked");
    var newDiv = document.createElement("div");
    var newText = document.createTextNode(regFact.values().theRegNum);
    newDiv.appendChild(newText);
    newDiv.classList.add("number-plate");

    if (!radio) {
        regFact.setReg(input.value);
        regFact.testRegNum();
    } else if (radio) {
        regFact.setReg(input.value);
        regFact.testRegNum(radio.value);

        
        // theList.appendChild(newDiv);

        if (radio.value === "capetown") {

        } else if (radio.value === "stellenbosch") {

        } else if (radio.value === "paarl") {

        } else if (radio.value === "george") {

        }
    }
    




    

    errormess.innerHTML = regFact.values().theError;
    input.value = "";
}

addBtn.addEventListener('click', regNumber);

function clearReg() {
    regFact.clear();
    
    
}

clearBtn.addEventListener('click', clearReg);
