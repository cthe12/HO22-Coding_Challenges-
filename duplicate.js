// remove all consecutive duplicate words from a string, leaving only first words entries.

function removeConsecutiveDuplicates(str){
    //str -> split " " -> filter 
    return str.split(" ").filter((w,i,a) => w != a[i-1]).join(" ")
  }