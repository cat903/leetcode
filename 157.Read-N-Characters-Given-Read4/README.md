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



| 1 char | 1 byte | 8 bit |
|--------|--------|-------|
| 1 word | 4 byte | 32bit |




    -> Because of the physical implementation, loading 4 bytes in DDR is faster than to load 1 byte 4 times.

    -> On the majority of computers today, collection of 4 bytes, or 32 bits, is called a word. Most modern CPUs are optimized for the operations with words.


href: https://hexus.net/tech/tech-explained/ram/702-ddr-ii-how-it-works/

href: https://en.wikipedia.org/wiki/Round-robin_scheduling

href: https://en.wikipedia.org/wiki/C10k_problem