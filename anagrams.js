// Anagrams are words or phrases that contain the same number of characters. 
// Create a function that checks for this.

function isAnagram(str1, str2) {
    let string1 = str1.split("").sort().join("");
    let string2 = str2.split("").sort().join("");
    return string1 === string2
}

console.log(isAnagram("hello world", "world hello"))
console.log(isAnagram("hello world", "hello there"))


// describe("Anagrams", () => {
//  it("Should implement anagrams", () => {
//   assert.equal(anagrams("hello world", "world hello"), true);
//   assert.equal(anagrams("hellow world", "hello there"), false);
//   assert.equal(anagrams("hellow world", "hello there!"), false);
//  });
// });