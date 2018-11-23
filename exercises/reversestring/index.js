// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var temp;
    var arrStr = str.split('');
    for (let i=0; i < arrStr.length/2; i++) {
        temp = arrStr[i];
        arrStr[i] = arrStr[arrStr.length - 1 -i];
        arrStr[arrStr.length - 1 -i] = temp;
    }
    return arrStr.join('');
}

function reverse(str) {
    var reverse = '';

    for (const char of str) {
        reverse = char + reverse;
    }

    return reverse;
}

function reverse(str) {
    return str.split('').reduce((accu, next) => next + accu, '');
}

module.exports = reverse;
