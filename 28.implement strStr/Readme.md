# [Implement strStr](https://leetcode.com/problems/implement-strstr)

## Understanding Problem:
We have provided with 2 strings one is haystack and other is needle
we have to return the index of first occurence of needle in haystack

if needle is empty we will return -1



```c
//strStr.c
int strStr(char * haystack, char * needle)
{
    int hi, ni;
    int hlen = strlen(haystack);
    int nlen = strlen(needle);
    
    if (nlen > hlen)
        return -1;
    
    if (nlen == 0)
        return 0;
    
    for (hi = 0; hi < (hlen - nlen + 1); hi++) {
        if (strncmp(&haystack[hi], needle, nlen) == 0)
            return hi;
    }

    return -1;
}
```

```js
/**
 * strStr.js
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return null; 
    return haystack.indexOf(needle);
};
```