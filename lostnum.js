// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length) {
      return 0
    }else {
      return arr.reduce((acc, c) => acc + c, 0) - mixArr.reduce((acc, c) => acc + c, 0)
    }
  }