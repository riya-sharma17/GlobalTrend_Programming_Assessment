// Write a function that checks if two given strings are anagrams of each other

function areAnagrams(str1, str2) {
const normalize = str => str.split('').sort().join('');
return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent"));