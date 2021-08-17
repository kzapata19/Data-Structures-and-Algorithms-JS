/* Given a string of characters as input, write a function that returns it with the characters reversed.

- convert the string into an array where each elem is a string separate by a comma
- iterate through the array from the end to start
- push each elem (in reverse order) into the output array

questions to ask:
are there time or space limitations? 
should the reversal occur in place? 
lets say 'no' to both questions to make this an easy problem
*/

//traditional loop and split method only
function reverse(str) {
    let output = [];
    let strArr = str.split("");
    let len = strArr.length - 1;

    for(let i = len; i >= 0 ; i--) {
        output.push(strArr[i])
    }
    return output.join("");
}

//for of loop
function reverse(str) {
    let output = ""
    for(let char of str) {
        output = char + output
    }
    return output;
}

//reduce
function reverse(str) {
    return str.split("").reduce((result, elem) => {
        console.log(`here is the elem: ${elem} and the result: ${result}`)
        return elem + result
    })
}

//reverse and other native methods chained
function reverse(str) {
    return str.split("").reverse().join("")
}

describe("String Reversal", () => {
 it("Should reverse string", () => {
  assert.equal(reverse("Hello World!"), "!dlroW olleH");
 });
});

