// convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    return word.toLowerCase().split('').map((l,i,a) => a.indexOf(l) === a.lastIndexOf(l) ? '(':')').join('');
}