// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const nStr = n.toString();
    let rev = '';
    let symbol = '';

    for(let i=0; i<nStr.length; i++) {
        if(isNaN(nStr[i])) {
            symbol = nStr[i]
        } else {
            rev = nStr[i] + rev;
        }
    }
    return parseInt(symbol + rev);
}

module.exports = reverseInt;
