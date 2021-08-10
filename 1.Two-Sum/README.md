## TWO-SUM
![two-sum](./q.png)

## BRUTE FORCE

The brute force approach is simple. Loop through each element xxx and find if there is another value that equals to target.

```JS
/**
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

