// Write a function that filters out even numbers from an array.

function filterEvenNumbers(arr) {
return arr.filter(num => num % 2 !== 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));