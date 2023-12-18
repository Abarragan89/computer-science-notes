const Benchmark = require('benchmark')

const suit = new Benchmark.Suite();

function bubbleSort(arr) {
    let num = 0;
    // we use the i variable set the amount of comparisions in the nested loop
    // we don't use the i variable to access any item in the array, we just use 'j' and 'j + 1' 
    for (let i = arr.length - 1; i > 0; i--) {
        // Don't compare with last digit that already bubbled
        for (let j = 0; j < i; j++) {
            console.log('number of times', ++num)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


// create series of numbers
const numbers = [];
for (let i = 1; i < 6000; i++) {
    numbers.push(Math.floor(Math.random() * 10000000))
}

// suit.add('Bubble Sort', function() {
//         bubbleSort(numbers)
//     })
//     .on('complete', function () {
//         this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds`))
//     })
//     .run();

const unsortedArr = [2, 4, 1, 93, 8, 5, 3]

const result = bubbleSort(unsortedArr)
console.log(result)