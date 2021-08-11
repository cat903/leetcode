## TWO-SUM
![two-sum](./q.png)

## BRUTE FORCE

The brute force approach is simple. Loop through each element xxx and find if there is another value that equals to target.

```C
 /**
 * brute.c
 * Note: The returned array must be malloced, assume caller calls free().
 */

int* twoSum(int* nums, int numsSize, int target, int* returnSize){
   *returnSize = 2;
   int* returnArr = (int*)malloc(2 * sizeof(int));
   for(int i=0;i<numsSize-1;i++){
       for(int j=i+1;j<numsSize;j++){
           if(nums[i]+nums[j]==target){
               returnArr[0] = i,returnArr[1] = j;
               return returnArr;
           }
       }
   }
    return 0;
}

```

```JS
/**
 * brute.js
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
   for(let i=0;i<nums.length-1;i++){
       for(let j=i+1;j<nums.length;j++){
           if(nums[i]+nums[j]===target){
               return [i,j];
           }
       }
   }
   return null;
}
```

## Complexity Analysis


  - Time complexity: O(n2). Two Loops Running To Match Summation of Element of Inner and Outter with Target . Therefore, the time complexity is O(n2).

  - Space complexity: O(1). The space required does not depend on the size of the input array, so only constant space is used.



## Hash Map


We Iterate through nums and remember elements position and value. if we have seen the number that makes up target we return with the indices.

```JS
/**
 * hashmap.js
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    let hash = {};
    for(let i=0;i<nums.length;i++){
        if(target-nums[i] in hash){
            return [i,hash[target-nums[i]]];
        }
        hash[nums[i]] = i; 
    }
    return null;
}
````

## Complexity Analysis
  - Time complexity:
  - Space complexity:

