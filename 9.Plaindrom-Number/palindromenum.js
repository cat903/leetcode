/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let revX = Number(Math.abs(x).toString().split('').reverse().join(''));
    return revX===x ? true : false 
};