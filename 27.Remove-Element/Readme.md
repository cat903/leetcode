# [Remove-Element](https://leetcode.com/problems/remove-element/)

## Understanding Problem:
We are provided with an array nums and a val. we have to design a solution
so that first k elements are unique and return k.

constraints are we can't allocate memory for a new array..we have to do all stuff with the current array.

## Aproach: Two-Pointer

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     let i = 0;
    for(let j = 0; j<nums.length;j++){
        if(nums[j]!==val){
            nums[i++] = nums[j];
        }
    }
    return i;
};
```