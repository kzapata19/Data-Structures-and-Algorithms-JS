// Given a string of characters, return the character that appears the most often.

// time complexity: O(n) linear, space complexity: 0(1) constant
function maxChar(str) {
    let inventory = {}
    
    for(let char of str) {
        inventory[char] = inventory[char] + 1 || 1
        // if(!inventory[char]) {
        //     inventory[char] = 1
        // } else {
        //     inventory[char]++;
        // }
    }
    let currMax = 0
    let maxElem = null;
    for(let elem in inventory) {
        if(inventory[elem] > currMax) {
            maxElem = elem
            currMax++
        } 
    }
    return maxElem;
}

console.log(maxChar("Hello World!"));
// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });