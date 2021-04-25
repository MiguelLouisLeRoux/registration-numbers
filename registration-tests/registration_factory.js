function regFactFunc() {
    //Error message variables
    var noRegNum = "Oops, no Registration number entered."
    var noFilt = "Oops, no location selected."
    var error = "";

    //Registration number variable
    var regNum = "";

    function setReg(input) {
        regNum = input.trim(); 
    }

    function testRegNum(regNum){
        if (regNum === "" || !/^[^a-zA-Z0-9]+$/.test(regNum)) {
            error = noRegNum;
            return error;
        } else if (/^[^a-zA-Z0-9]+$/.test(regNum)) {

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

    return { setReg,
             testRegNum,
             noLoc,
             values
    }
}