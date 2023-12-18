function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let numberToCompare = arr[i];
        // stop looping if we get to zero or is the item is less than
        for (var j = i - 1; j >= 0 && arr[j] > numberToCompare; j--){
                arr[j + 1] = arr[j]
        }
        arr[j + 1] = numberToCompare;

    }
    return arr;
}

const unsortedArr = [2, 4, 1, 93, 8, 5, 3]

const result = insertionSort(unsortedArr)
console.log(result)
