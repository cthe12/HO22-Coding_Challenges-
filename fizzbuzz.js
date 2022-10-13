// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// Hint: Loop with conditionals that use modulus

function fizzBuzz(num) {
    // for loop from 1 to num
    for(let i = 1; i <= num; i++) {
    
    // conditional

        // if num % 3===0 && num % 5 === 0 -> fizzBuzz
       // if num % 3 === 0 -> fizz
      // if num % 5 === 0 -> buzz
     // log the num

    if(i % 3 === 0 && i % 5 === 0) {

    console.log('fizzBuzz')

    }else if(i % 3 === 0) {

    console.log('fizz')

    }else if(i % 5 ===0){

    console.log('buzz')

    }else console.log(i)

    }
     
    }
    
    fizzBuzz(5) // 1, 2, fizz, 4, buzz
    fizzBuzz(9) // 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
    