// create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements

function gimme (triplet) {
    return triplet.indexOf([...triplet].sort((a,b) => a - b)[1])
    } 