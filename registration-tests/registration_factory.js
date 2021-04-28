function regFactFunc() {
    //Error message variables
    var noRegNum = "Oops, no Registration number entered.";
    var secRegNum = "Registration number has already been inserted";
    var error = "";

    //Registration number variable
    var regNum = "";

    //Regular expressions
    var reg1 = /([A-Z]){2}\s([0-9]){3}\s([0-9]){3}/g;
    var reg2 = /([A-Z]){2}\-([0-9]){3}\-([0-9]){3}/g;
    var reg3 = /([A-Z]){2}\s([0-9]){6}/g;

    //Storage of registration numbers
    var arr = [];
    var obj = {};

    function getRegNum(input) {
        regNum = input.toUpperCase().trim();
    }

    function testRegNum(){
        if (obj[regNum] === undefined) {
            if (/([A-Z]){2}\s([0-9]){3}\s([0-9]){3}/g.test(regNum) || /([A-Z]){2}\-([0-9]){3}\-([0-9]){3}/g.test(regNum) || /([A-Z]){2}\s([0-9]){6}/g.test(regNum) && regNum.length === 10 || regNum.length === 9) {
                arr.push(regNum);
                obj[regNum] = 1;
                error = "";
            } else if (regNum === "" || !reg1.test(regNum) || !reg2.test(regNum) || !reg3.test(regNum) || regNum.length < 9 || regNum.length > 10) {
                
                error = noRegNum;
                regNum = "";
                return error;
            }
        } else if (obj.hasOwnProperty(regNum)) {
            regNum = "";
            error = secRegNum;
        }
    }

    function filtering(radVal) {
        for (var i = 0; i < arr.length; i++) {
            var itt = arr[i];

            if (radVal === "capetown") {
                if (itt.startsWith("CA")) {
                    
                }
            } else if (radVal === "stellenbosch") {
                if (itt.startsWith("CL")) {
                    
                }
            } else if (radVal === "bellville") {
                if (itt.startsWith("CY")) {
                    
                }
            } else if (radVal === "paarl") {
                if (itt.startsWith("CJ")) {
                    
                }
            }
        }
    }

    function values() {
        return {
            theError : error,
            theRegNum : regNum,
            theArr : arr,
            theObj : obj,
        }
    }

    function clear() {
        regNum = "";
        error = "";
        arr = [];
        localStorage.clear();
    }

    return { getRegNum,
             testRegNum,
             filtering,
             values,
             clear
    }
}