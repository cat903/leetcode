# [Longest-Common-Prefix](https://leetcode.com/problems/longest-common-prefix/)

# Left-Right-Pass: Pseudo Code
```pseudo
loop while i < strs[0].length
 j=1;
   loop while j < strs.length
   if(strs[0][j]!=strs[j][i]) return strs.slice(0,1)
   j++
 i++ 
return strs[0]
```

# Implementation in JS
```JS
/**
 * lcp.js
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    for(let i=0; i<strs[0].length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[0][i]!==strs[j][i]){
                return strs[0].slice(0,i);
            }
        }
    }
    return strs[0];
};
```

# Implementation in C
```c
//lcp.c
char * longestCommonPrefix(char ** strs, int strsSize){
    for(int i=0; strs[0][i] != '\0'; i++){
        for(int j=1; j < strsSize; j++){
            if(strs[0][i]!=strs[j][i]){
                strs[0][i] = '\0';
                return strs[0];
            }
        }
    }
    return strs[0];
}
```