// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let c = 0;
    return array.reduce((accu, next) => {
        if (accu[[c]].length < size) {
            accu[[c]].push(next);
            return accu;
        } else {
            accu.push([]);
            c++;
            accu[[c]].push(next);
            return accu;
        }
    }, [[]])
}

function chunk(array, size) {
    let i = 0;
    let j = size;
    var cArray = [];
    for (let i = 0; i < array.length; i+=size) {
        cArray.push(array.slice(i, j));
        j+=size
    }

    return cArray;
}

module.exports = chunk;
