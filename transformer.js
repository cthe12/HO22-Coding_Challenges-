// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.

function stringTransformer(str) {
    return str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
   }