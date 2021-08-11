/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let revX = Math.sign(x) * Math.abs(x).toString().split('').reverse().join('');
    return ((revX > Math.pow(-2,31)) &&(revX < Math.pow(2,31)-1)) ? revX : 0;
};