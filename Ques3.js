// Write a function that takes a nested array and returns a flattened array.

function flattenArray(arr) {
return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4, 5]]]]));