const removeFromArray = function(arr, ...remove) {
    return arr.filter((value) => !remove.includes(value))
}

// Do not edit below this line
module.exports = removeFromArray;
