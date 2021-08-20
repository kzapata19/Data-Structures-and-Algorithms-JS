/*
Given an array of integers arr, your task is to count the number of contiguous* sub-arrays such that elements
of the subarray are arranged in strictly decreasing order.

*contiguous definition also includes this example: [10, 10, 10] will output 3 since array of all duplicates so each 
subarray of [10] counts as a subarray that meets the constraints

For example, if arr = [9, 8, 4, 9, 3], the the subarray [9,8,4] meets the criteria ( 9 > 8 > 4), 
but the sub-array [8 ,4, 9] does not.

Example:
For arr = [ 9, 8, 7,6, 5], the output should be countDecreasingSubarrays(arr) = 15.

All contiguous sub-arrays satisfy the condition of the problem because all elements of the array are arranged in 
decreasing order. There are 15 possible contiguous sub-arrays, so the answer is 15.

For arr = [10, 10, 10], the output should be countDecreasingSubarrays(arr) = 3

Since all of the elements are equal, the sub-arrays can't be in strictly decreasing order unless they contain only one element.
There are 3 possbile sub-arrays containing one element, so the answer is 3.

Input/Output:
- execution time limit: 4 seconds (js)
- input - array.integer arr
An array of integers
Guaranteed constraints:
1 <= arr.length <= 10^5
-10^9 <= arr[i] <= 10^9

*/

function countDecreasingSubarrays(arr) {
    let totalCount = 0 + arr.length;
    let currSubArrLen = 1;
    
    for(let i = 0; i < arr.length - 1; ++i) {
        if(arr[i + 1] < arr[i]) {
            currSubArrLen++;
        } else {
            totalCount += parseInt(((currSubArrLen - 1) * currSubArrLen)/ 2);
            currSubArrLen = 1;
        }
    }

    if(currSubArrLen > 1) {
        totalCount = totalCount + parseInt(((currSubArrLen - 1) * currSubArrLen)/ 2);
    }
    return totalCount;
}

let arr1 = [9, 8 ,7, 6 ,5]
console.log(countDecreasingSubarrays(arr1))// -> 15