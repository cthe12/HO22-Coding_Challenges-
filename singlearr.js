// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
 
// arr => filter single values => reduce
// can see if an index of a number is the last index of num

function repeats(arr){
   
      return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n) ).reduce((acc, c) => acc + c, 0)
    };