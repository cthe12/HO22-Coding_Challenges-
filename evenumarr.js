// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(arr,num){
    return arr.filter(n => n % 2 === 0).slice(-num)
  }