# [Reverse-Integer](https://leetcode.com/problems/reverse-integer)

## Reverse String

 Converting the number x into String and Reversing using js built in function and then again converting to number x.

```js
/**
 * reversestr.js
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const absReversed = Math.abs(x).toString().split('').reverse().join('');
  return absReversed > 2**31 ? 0 : absReversed * Math.sign(x);
};
```
- q. how does the string multiply with Math.sign gives you a number??

- a. well because Math.sign returns a Number, and String multiply with a Number will return a Number, that's called **coercion**. 
                
        i.e '15' * -1 => -15 (Number)

## Reverse Integer

Modding number x untill its not zero and processing mod value to form reverse integer meanwhile avoiding int overflow in 32 bit machine.

```c
//reverseint.c
int reverse(int x)
{
    int mod = 0;
    int reversed = 0;
    while (x != 0)
    {
        mod = x % 10;

        if (reversed > (pow(2, 31) - 1) / 10 || reversed < -(pow(2, 31) / 10))
        {
            return 0;
        }

        reversed = reversed * 10 + mod;
        x /= 10;
    }
    return reversed;
}
```

**[Note: Eucledian modulo and Modulo Operator in C Behaves Differently for Negative numbers ie. google: -123 mod 10 will return 7 instead of -3]**
