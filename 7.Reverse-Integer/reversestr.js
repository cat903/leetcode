/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    return absReversed > 2 ** 31 ? 0 : absReversed * Math.sign(x);
};