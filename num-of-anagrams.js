/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. 
An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of 
anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

- sort each word 
- compare a pair of words one at a time to determine if anagram
    - if yes, increase the total count

- return total
*/

// ["dell", "ledl", "abc", "cba"]
// ["edll", "edll", "abc", "abc"]
// function numOfAnagrams(arr) {
//     let sortedWords = arr.map(word => word.toLowerCase().split("").sort().join(""));
//     let totalAnagrams = 0;

//     sortedWords.forEach((word, index) => {
//         for(let i = index+1; i < sortedWords.length; i++) {
//             if(word === sortedWords[i]) totalAnagrams++
//         }
//     })
//     return totalAnagrams;
// }

// ["edll", "edll", "abc", "abc"]
function numOfAnagrams(arr) {
    let sortedWords = arr.map(word => word.toLowerCase().split("").sort().join(""));
    let totalAnagrams = 0;
    let anagrams = []

    let p1 = 0, p2 = 1
    let length = arr.length
    while(p1 < length) {
        // if(sortedWords[p1] === sortedWords[p2]) {
        //     totalAnagrams++
        //     p2++
        //     anagrams.push([sortedWords[p1], sortedWords[p2]])
        // } else if(sortedWords[p1] !== sortedWords[p2]) {
        //     p2++
        // } 
        // p1++  
        if(sortedWords[p1] !== sortedWords[p2] && p2 < length){
            p2++
        } else if(sortedWords[p1] === sortedWords[p2]) {
            totalAnagrams++
            anagrams.push([sortedWords[p1], sortedWords[p2]])
        }
        p1++;
    }
    return `totalAnagrams: ${totalAnagrams} and result:${anagrams}`
}

// console.log(numOfAnagrams(["dell", "ledl", "abc", "cba"]))
console.log(numOfAnagrams(["dell", "ledl", "abc", "cba", "bca", "bac"]))