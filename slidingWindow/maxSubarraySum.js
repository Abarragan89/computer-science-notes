// This is a sliding window pattern
function maxSubarraySum(arr, quantity) {
    if (arr.length < quantity) return null;
    // add whatever parameters you deem necessary - good luck!
    let maxSum = 0

    // Get the first chunk of array and add it with a loop
    for (let i = 0; i < quantity; i++) {
        maxSum += arr[i]
    }
    // set temp sum to the first max sum
    let tempSum = maxSum;
    for (let i = quantity; i < arr.length; i++) {
        // the first iteration, this itemToSubtract will be zero, then 1, then 2...
        let itemToSubtract = arr[i - quantity];
        // chagnge temp sum to be itself, minus the last index, plus the first index
        tempSum = tempSum - itemToSubtract + arr[i]
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5