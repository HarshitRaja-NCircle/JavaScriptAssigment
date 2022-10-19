//validateString(["12asd", "asd10","asd"]) => ["12asd", "asd10"]

function ValidateString(array) {
    let result = [];
    let nums = [0,1,2,3,4,5,6,7,8,9];
    array.forEach(element => {
        let res = element.split('').some(e => Number.isInteger(parseInt(e)));
        if(res)
            result.push(element);
    });
    console.log(result)
}

var str = ["12asd", "asd10","asd"];
ValidateString(str);