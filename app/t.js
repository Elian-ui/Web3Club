
// function evenLengthSubsetsSum(k) {
//     let totalSum = 0;

//     for (let i = 0; i < k.length; i++) {
//         let subarraySum = 0;
//         for (let j = i; j < k.length; j++) {
//             subarraySum += k[j];
//             if ((j - i + 1) % 2 === 0) {  // Check if the length of subarray is even
//                 totalSum += subarraySum;
//             }
//         }
//     }

//     return totalSum;
// }

// // Example input
// const k = [1, 4, 2, 5];
// const result = evenLengthSubsetsSum(k);
// console.log(result);  // Output: 30

function solution(x) {
    const result = [];

    for (let i = 0; i <= x; i++) {
        result.push(binomialCoefficient(x, i));
    }

    return result;
}

function binomialCoefficient(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }

    let coefficient = 1;

    for (let i = 1; i <= k; i++) {
        coefficient = coefficient * (n - i + 1) / i;
    }

    return coefficient;
}

// DO NOT CHANGE the code below, we use it to grade your submission.
function printArray(arr) {
    console.log(JSON.stringify(arr).replace(/,\s*/g, '.'));
}

// Sample input
const n = parseInt([1, 3, 4, 5]);
const output = solution(n);
printArray(output);