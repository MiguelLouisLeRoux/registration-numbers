let addBtn = document.getElementById("theAdd");
let clearBtn = document.querySelector(".clear");
let display = document.getElementById("display");
let input = document.querySelector(".input");
let output = document.querySelector(".number-plate");
let theList = document.querySelector(".list-sect");
let errormess = document.querySelector(".error-message");


var regFact = regFactFunc();

function regNumber() {

    regFact.getRegNum(input.value);
    // console.log(regFact.values().theRegNum);
    // console.log(regFact.values().theRegNum.length);
    regFact.testRegNum();
    
    if (regFact.values().theError === "") {
        var newDiv = document.createElement("div");
        var newText = document.createTextNode(regFact.values().theRegNum);
        newDiv.appendChild(newText);
        newDiv.classList.add("number-plate");
        theList.appendChild(newDiv);
    } else if (regFact.values().theRegNum === "") {
        errormess.innerHTML = regFact.values().theError;
        setTimeout(function(){
            errormess.innerHTML = "";
        }, 1500);
        
    }

    input.value = "";
    // console.log(regFact.values().theArr);
    localStorage["list"] = JSON.stringify(regFact.values().theArr);
    localStorage["obj"] = JSON.stringify(regFact.values().theObj);
}

addBtn.addEventListener('click', regNumber);

if (localStorage["list"] && localStorage["obj"]) {
    regFact.values().theArr = JSON.parse(localStorage["list"]);
    regFact.values().theObj = JSON.parse(localStorage["obj"]);
}

function theDisplay() {
    var radio = document.querySelector("input[name='town']:checked");

    var newList = JSON.parse(localStorage["list"]);
    

    
    // var newText = document.createTextNode(itt);
    
    if (radio) {
        for (var i = 0; i < newList.length; i++) {
            var itt = newList[i];
            console.log(itt);
            if (radio.value === "capetown") {
                if (itt.startsWith("CA")) {
                    var newDiv = document.createElement("div");
                    var newText = document.createTextNode(itt);
                    newDiv.appendChild(newText);
                    newDiv.classList.add("number-plate");
                    theList.appendChild(newDiv);
                    
                }
            } else if (radio.value === "stellenbosch") {
                if (itt.startsWith("CL")) {
                    var newDiv = document.createElement("div");
                    var newText = document.createTextNode(itt);
                    newDiv.appendChild(newText);
                    newDiv.classList.add("number-plate");
                    theList.appendChild(newDiv);
                }
            } else if (radio.value === "bellville") {
                if (itt.startsWith("CY")) {
                    var newDiv = document.createElement("div");
                    var newText = document.createTextNode(itt);
                    newDiv.appendChild(newText);
                    newDiv.classList.add("number-plate");
                    theList.appendChild(newDiv);
                }
            } else if (radio.value === "paarl") {
                if (itt.startsWith("CJ")) {
                    var newDiv = document.createElement("div");
                    var newText = document.createTextNode(itt);
                    newDiv.appendChild(newText);
                    newDiv.classList.add("number-plate");
                    theList.appendChild(newDiv);
                }
            }
        }
    }
    
   
}

display.addEventListener('click', theDisplay);


function clearReg() {
    regFact.clear();
    location.reload();
    
}

clearBtn.addEventListener('click', clearReg);
