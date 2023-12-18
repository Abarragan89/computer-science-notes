const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];


// const mostDuplicates = (arr) => {
//     let number = 0;
//     let counter = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         let innerCounter = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 innerCounter++
//             }
//         }
//         if (innerCounter > counter) {
//             counter = innerCounter;
//             number = arr[i];
//         }
//     }
//     return `${number} appeared ${counter} times.`
// };

const mostDuplicates = (arr) => {
    const map ={};
    arr.forEach(number => {
        if (map[number] === undefined){
            map[number] = 1;
        } else {
            map[number]++;
        }
    });
    let mostValue;
    let mostCount = 0;

    for (const value in map) {
        if(map[value] > mostCount) {
            mostCount = map[value];
            mostValue = value;
        }
    }
    
    return `${mostValue} appeared ${mostCount} times.`
};

console.log(mostDuplicates(numbers));
