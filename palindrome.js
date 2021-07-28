/*A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

- based on given test case, a string is a palindrome regardless of capitalization and punctuation
- use regex to remove punctuation 
- lowercase or uppercase the entire string to compare

*/

function isPalindrome(str) {
    let reversed = str.lowercase().split("").reverse()
    
}

// describe("Palindrome", () => {
//  it("Should return true", () => {
//   assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
//  }); it("Should return false", () => {
//   assert.equal(isPalindrome("sit ad est love"), false);
//  });
// });