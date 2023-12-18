function outer() {
    let number = 0;

    function increment() {
        number++;
        return number;
    }

    return increment;
}

const newFunc = outer();

console.log(number)

console.log(newFunc())
console.log(newFunc())
console.log(newFunc())
console.log(newFunc())
console.log(newFunc())
console.log(newFunc())





// Which function is the higher order function? 
// Which is the callback function? 
// Why would we do this? 







function increment() {
    let number = 0;
    number++;
    return number;
}


console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
