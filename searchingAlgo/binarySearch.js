const binarySearch = (arr, num, left, right) => {
    // find the middle relative to the left and right
    let middle = Math.floor((left + right) / 2);
    // if left is greater than right, number was not found
    if (left > right) {
        return -1;
    }
    // if number is the middle item, we found it!
    else if (num === arr[middle]) {
        return middle;
    }
    // if the number is less than middle, move the right index to middle minus 1
    else if (num < arr[middle]) {
        return binarySearch(arr, num, left, middle - 1);
    }
    // if the number is greater than middle, move the left index to middle + 1
    else {
        return binarySearch(arr, num, middle + 1, right);
    }
};