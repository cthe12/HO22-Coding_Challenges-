// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

function averageLength(arr) { 
    const avgLength = Math.round(arr.join('').length / arr.length)
    //create new arr using each letter the avgLength amount
    return arr.map( str => str[0].repeat(avgLength))
  }