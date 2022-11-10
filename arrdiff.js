// implement a difference function, which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
    let newSet = new Set(b)
    return a.filter( n => !newSet.has(n))
  }