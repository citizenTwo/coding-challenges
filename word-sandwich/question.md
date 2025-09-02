# Word Sandwich Challenge

## Problem Description
Given three strings: `str1`, `str2`, and `result`, determine if `result` can be formed by interleaving characters from `str1` and `str2` while maintaining their relative order.

A valid interleaving means that the characters from both strings must appear in their original order in the result string, though they can be mixed together.

### Example 1:
```
Input:  
str1 = "abc"
str2 = "def"
result = "adbecf"
Output: true
Explanation: Characters from "abc" (str1) and "def" (str2) are interleaved while maintaining their relative order
```

### Example 2:
```
Input:
str1 = "code"
str2 = "lap"
result = "coldape"
Output: false
Explanation: The characters don't maintain their relative order from original strings
```

### Example 3 (Drastic Length Difference):
```
Input:
str1 = "hi"
str2 = "programming"
result = "hpriogramming"
Output: true
Explanation: Characters from "hi" are inserted while maintaining the order of "programming"
```

## Constraints:
- The strings will only contain ASCII characters
- The length of result string should equal the sum of lengths of str1 and str2
- Input strings can have drastically different lengths
- Input strings can be empty
