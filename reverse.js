// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method

function reverseString(str){
//return str.split('').reverse().join('')
    let reverseStr = ""
    for(let char of str){
      reverseStr = char + reverseStr
    }
    return reverseStr
  }