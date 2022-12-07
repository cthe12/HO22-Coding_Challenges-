// figure out the index of which vowel is missing from a given string

function absentVowel(x){
    let vowels = 'aeiou'
    for(let i = 0; i < vowels.length; i++){
      if( x.indexOf(vowels[i]) === -1){
        return i
      }
    }
  
  }