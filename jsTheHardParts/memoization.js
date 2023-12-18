// Memoization
function isPrimeOuter() {
    const store = {};

    function isPrimeInner(num) {
        console.time('findingPrime')
        if (store[num]) {
            console.timeEnd('findingPrime')
            return store[num]
        } else {
            // fake lage
            let number = 0;
            while (number < 10000000000) {
                number++
            }
            store[num] = num * 2
            console.timeEnd('findingPrime')
            return store[num]
        }
    }
    return isPrimeInner;
}
const newFunc = isPrimeOuter();

console.log(newFunc(2))
console.log(newFunc(2))
console.log(newFunc(4))
console.log(newFunc(4))