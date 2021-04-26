function regFactFunc() {
    //Error message variables
    var noRegNum = "Oops, no Registration number entered."
    var noFilt = "Oops, no location selected."
    var error = "";

    //Registration number variable
    var regNum = "";

    //Regular expression
    var reg1 = /([A-Z]){2}\s + ([0-9]){3}\s([0-9]){3}/g;
    var reg2 = /([A-Z]){2}\- + ([0-9]){3}\-([0-9]){3}/g;
    var reg3 = /([A-Z]){2}\s + ([0-9]){6}/g;
    //Storage of registration numbers
    var arr = [];

    function setReg(input) {
        regNum = input.trim(); 
    }

    function testRegNum(radVal){
        if (regNum === "" || !reg1.test(regNum)) {
            error = noRegNum;
            regNum = "";
            return error;
        } else if (reg1.test(regNum) || reg2.test(regNum) || reg3.test(regNum)) {
            arr.push(regNum);
            if (radVal === "capetown") {
                for(var i = 0; i < arr.length; i++) {
                    itt = arr[i];
                    
                    if (itt.startsWith("CA")) {

                    }
                }
            } else if (radVal === "stellenbosch") {
                
            } else if (radVal === "paarl") {

            } else if (radVal === "george") {

            }
        }
    }

    
        
    

    function noLoc() {
        error = noFilt;
        return error;
        
    }

    function values() {
        return {
            theError : error,
            theRegNum : regNum,
        }
    }

    function clear() {
        regNum = "";
        error = "";
        localStorage.clear();
    }

    return { setReg,
             testRegNum,
             noLoc,
             values,
             clear
    }
}