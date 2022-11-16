// given an array of numbers sort the odd numbers in ascending order while leaving the even numbers at their original positions

// filter and sort
//filter to get all the odd numbers
// map through array to see if number is even 
function sortArray(array) {
    const oddNums = array.filter(n => n % 2).sort((a,b) => a - b)
    return array.map(n => n % 2 === 0 ? n : oddNums.shift())
  }
