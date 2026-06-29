const repeatString = function(inputString, numRepeat) {
    if (numRepeat < 0) {
        return "ERROR";
    }
    
    let result = "";
    for (let step = 0; step < numRepeat; step++) {
        result = result + inputString;
    }
    
    return result;
};


// Do not edit below this line
module.exports = repeatString;

// 1 declarar una variable de tipo string vacia llamada resultado
// 2 hacer un bucle desde 1 hasta el valor numRepeat, es decir 3 veces
// 2a dentro del bucle concatenar el valor resultado con inputString
// 3 cuando termine el bucle, fuera del bucle retorno la variable resultado