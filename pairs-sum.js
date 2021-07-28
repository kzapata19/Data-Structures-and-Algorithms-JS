//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once

twoSum([1,2,2,3,4], 4) -> [[2, 2], [3,1]]

const twoSum = (array, sum) => {
    const pairs = []
    const store = {}

    for(let part1 of array) {
        const part2 = sum -part1;
    }

    if(!store[part2]) { //is part 2 a prop in store?
        store[part1] = 1
    } else {
        pairs.push([part1, part2])
    }
    return pairs;
}