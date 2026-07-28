function sumAll(num1, num2) {
    if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
    ) {
    return "ERROR";
    }

    let numMin;
    let numMax;
    if (num1 <= num2) {
        numMin = num1;
        numMax = num2;
    } else {
        numMin = num2;
        numMax = num1;
    };
    
   const intervalArray = Array.from({length: numMax - numMin + 1}, (x, i) => i + numMin);
   let sum = 0;
   for (let i = 0; i < intervalArray.length; i++) {
        sum += intervalArray[i];
    }

    return sum;
};


// Do not edit below this line
module.exports = sumAll;

