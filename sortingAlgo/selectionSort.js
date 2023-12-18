function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j
            }
        }

        // conditionally swap if smallest index changed
        if (smallestIndex !== i) {
            let temp = arr[smallestIndex];
            arr[smallestIndex] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

const unsortedArr = [2, 4, 1, 93, 8, 5, 3]

const result = selectionSort(unsortedArr)
console.log(result)