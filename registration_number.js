let addBtn = document.getElementById("theAdd");
let clearBtn = document.querySelector(".clear");
let display = document.getElementById("display");
let input = document.querySelector(".input");
let output = document.querySelector(".number-plate");
let theList = document.querySelector(".list-sect");
let errormess = document.querySelector(".error-message");


var regFact = regFactFunc();

var theObj = {};
var theArr = [];

function regNumber() {

    regFact.getRegNum(input.value);
    regFact.testRegNum();

    localStorage["theArr"] = JSON.stringify(regFact.values().theArr);
    localStorage["theobj"] = JSON.stringify(regFact.values().theObj);
    
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

}

addBtn.addEventListener('click', regNumber);


function theDisplay() {
    var radio = document.querySelector("input[name='town']:checked");
    
    if (radio) {         
        while (theList.hasChildNodes()) {  
            theList.removeChild(theList.firstChild);
        }

        regFact.filtering(radio.value);
        
        for (var i = 0; i < regFact.filtering(radio.value).length; i++) {
            var itt = regFact.filtering(radio.value)[i];
        
        var newDiv = document.createElement("div");
        var newText = document.createTextNode(itt);
        newDiv.appendChild(newText);
        newDiv.classList.add("number-plate");
        theList.appendChild(newDiv);
        }
        
    } else if (!radio) {
        errormess.innerHTML = regFact.values().noRadio;
        setTimeout(function(){
            errormess.innerHTML = "";
        }, 1500);
    }
    
}

display.addEventListener('click', theDisplay);


function clearReg() {
    regFact.clear();
    while (theList.hasChildNodes()) {  
        theList.removeChild(theList.firstChild);
    }
    
}

clearBtn.addEventListener('click', clearReg);

if (localStorage["theArr"] && localStorage["theobj"]) {

    theObj = JSON.parse(localStorage["theobj"]);
    theArr = JSON.parse(localStorage["theArr"]);
    regFact.localReset(theArr, theObj);

    for (var j = 0; j < theArr.length; j++) {
        var itt1 = theArr[j];

        var newDiv = document.createElement("div");
        var newText = document.createTextNode(itt1);
        newDiv.appendChild(newText);
        newDiv.classList.add("number-plate");
        theList.appendChild(newDiv);
    }
}

