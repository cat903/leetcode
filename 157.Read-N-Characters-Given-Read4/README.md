# [Read N Characters Given Read4](https://leetcode.com/problems/read-n-characters-given-read4/)


## Understanding Problem: 
The problem says there's a method `read4` which takes an array name buf4[] as parameter and can read 4 consecutive characters.

when read4(buf4[]) is called it reads 4 consecutive character from file and inserts into buf4 and returns how many characters were written.

Our task is to read n character from file, making sure buf has n characters

## Explaination:

![explaination]()

## Solution:

```js
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    let buf4 =  [];
    return function(buf, n) {
        while(n>0){
            if(!buf4.length) read4(buf4);
            if(!buf4.length) break;
            buf.push(buf4.shift());
            n--;
        }
    };
};
```


