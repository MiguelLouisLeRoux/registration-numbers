let addBtn = document.querySelector(".add");
let clearBtn = document.querySelector(".clear");
let input = document.querySelector(".input");
let output = document.querySelector(".number-plate");
let list = document.getElementById("nList");
let errormess = document.querySelector(".error-message");
let ca = document.querySelector(".ca");
let cl = document.querySelector(".stel");
let cj = document.querySelector(".pa");
let caw = document.querySelector(".geo");

var regFact = regFactFunc();

function regNumber() {
    regFact.setReg(input.value);
    var newDiv = document.createElement("div");
    var newText = document.createTextNode(regFact.values().theRegNum);
    newDiv.appendChild(newText);
    newDiv.classList.add("number-plate");
    document.body.appendChild(newDiv);
}

addBtn.addEventListener('click', regNumber);

function clearReg() {

}

clearBtn.addEventListener('click', clearReg);
