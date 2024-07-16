// Write a function that converts a given string to title case (capitalizing the first letter of each word).


function toTitleCase(str) {
return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(toTitleCase("this is a title case example"));