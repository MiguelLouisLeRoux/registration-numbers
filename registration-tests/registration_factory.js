function regFactFunc() {
    //Error message variables
    var noRegNum = "Oops, no Registration number entered.";
    var secRegNum = "Registration number has already been inserted.";
    var error = "";
    var noRad = "Oops, no town selected.";

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
        
        if (radVal === "capetown") {
            var cp = arr.filter((cape) => cape.startsWith("CA"));
            return cp;
        } else if (radVal === "stellenbosch") {
            var st = arr.filter((cape) => cape.startsWith("CL"));
            return st;  
        } else if (radVal === "bellville") {
            var be = arr.filter((cape) => cape.startsWith("CY"));
            return be;       
        } else if (radVal === "paarl") {
            var pa = arr.filter((cape) => cape.startsWith("CJ"));
            return pa;      
        } else if (radVal === "all") {

        }
        
    }

    function noRadioBut() {
        error = noRad;
    }

    function values() {
        return {
            theError : error,
            theRegNum : regNum,
            theArr : arr,
            theObj : obj,
            noRadio : noRad,
        }
    }

    function localReset(lArr, lObj) {
        arr = lArr;
        obj = lObj;
    }

    function clear() {
        regNum = "";
        error = "";
        arr = [];
        obj = {};
        localStorage.clear();
    }

    return { getRegNum,
             testRegNum,
             filtering,
             values,
             noRadioBut,
             localReset,
             clear
    }
}