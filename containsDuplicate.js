/*
Given an integer array nums, 
return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// Time complexity: O(n); Space complexity: O(1)
var containsDuplicate = function(nums) {
    // let hash = nums.reduce((dict, num) => {
    //     if(dict[num]) {
    //         dict[num]++;
    //     } else {
    //         dict[num] = 1;
    //     }
    //     return dict;
    // }, {})

    // for(let elem in hash) {
    //     if(hash[elem] > 1) return true
    // }
    // return false;
    let map = {}
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1
        if(map[nums[i]] > 1) return true
    }
    return false;
}

