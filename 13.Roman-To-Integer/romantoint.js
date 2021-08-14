/**
 * romantoint.js
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function (s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let value = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanNumerals[s[i]];
        const next = romanNumerals[s[i+1]];
        (current < next) && (next!==undefined) ? value -= current : value += current;
    }
    return value;
}