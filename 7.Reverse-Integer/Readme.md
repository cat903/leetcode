# Reverse-Integer

[!Reverse-Integer](./q.png)

## Reverse String

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let revX = Math.sign(x) * Math.abs(x).toString().split('').reverse().join('');
    return ((revX >= Math.pow(-2,31)) &&(revX <= Math.pow(2,31)-1)) ? revX : 0;
};
```
- how does the string multiply with Math.sign gives you a number??

 - well because Math.sign returns a Number, and String multiply with a Number will return a Number, that's called coercion. i.e '15' * -1 => -15 (Number)
