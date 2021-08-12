/* Given an integer, reverse the order of the digits.

*/

function reverse(num) {
    let reversed =  parseInt(num.toString().split("").reverse().join(""))
    console.log(reversed)
    return reversed * Math.sign(num);
}

console.log(reverse(-1234))
// describe("Integer Reversal", () => {
//  it("Should reverse integer", () => {
//   assert.equal(reverse(1234), 4321);
//   assert.equal(reverse(-1200), -21);
//  });
// });