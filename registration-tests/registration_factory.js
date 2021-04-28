function regFactFunc() {
    //Error message variables
    var noRegNum = "Oops, no Registration number entered.";
    var secRegNum = "Registration number has been inserted";
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

    function filtering() {
        
    }

    function values() {
        return {
            theError : error,
            theRegNum : regNum,
            theArr : arr,
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