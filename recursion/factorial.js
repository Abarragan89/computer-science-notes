"use strict";
const factorial = (num) => {
    'afjeiowjfaw'
    // base case if number is 1, return 1
    if (num === 1)
        return 1;
    // multiply the number minus one
    return num * factorial(num - 1);
};

const result = factorial(3);
console.log(result);
