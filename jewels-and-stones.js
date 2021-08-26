/*
You're given strings jewels representing the types of stones that are jewels, 
and stones representing the stones you have. Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 
Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

Parameters:
- two strings:
    - jewels
    - stones

Return: an integer that represents the number of jewels present in the stones string

Edge cases/examples:
- none of the jewels are included in the stones
Input: jewels = "z", stones = "ZZ"
Output: 0
- all the jewels are included in the stones
Input: jewels = "aA", stones = "aAA"
Output: 3

Pseudocode:
- create a hash of the jewels
- iterate through the stones string 
    - increment total counter when a jewel is found
- return the total
*/

var numJewelsInStones = function(jewels, stones) {
    // let jewelHash = jewels.split("").reduce((hash, jewel) => {
    //     hash[jewel] = hash[jewel]++ || 1
    //     return hash
    // }, {})
    // let totalJewels = 0;
//     for(let stone of stones) {
//        if(jewelHash[stone]) totalJewels++
//     }
//    return totalJewels
    //use a Set:
    let jewelHash = new Set(jewels)
    return stones.split("").reduce((total, stone) => {
        return total + jewelHash.has(stone)
    }, 0)
};

console.log(numJewelsInStones("aA", "aAA"))
console.log(numJewelsInStones("z", "ZZ"))
console.log(numJewelsInStones("z", "zzzz"))