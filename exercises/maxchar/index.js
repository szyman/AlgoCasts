// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let strMap = new Map();
    for(let s of str ) {
        var val = strMap.get(s);
        if (val) {
            strMap.set(s, val+1);
        } else {
            strMap.set(s, 1);
        }
    }

    var max = {value:0};

    for (var [key, value] of strMap.entries()) {
        if (value > max.value) {

            max = {key, value}
        }
    }

    return max.key;
}

module.exports = maxChar;
