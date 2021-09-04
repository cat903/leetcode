# [Palindrome-Number](https://leetcode.com/problems/palindrome-number)

# Reverse String Aproach

 Convert x into absolute number then convert to string and use js built in string.reverse() method finally typecast to Number
 Match revX with param x & return value in bool 
 
 Explanation: any negative value as param x  will return false 
 e.g: x = -121 revX= 121 ; x!=revX; 
 from left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

 ```JS
 /**
 * palindromenum.c
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let revX = Number(Math.abs(x).toString().split('').reverse().join(''));
    return revX===x ? true : false 
};
```