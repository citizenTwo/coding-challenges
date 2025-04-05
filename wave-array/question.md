# Wave Array

Create a function that rearranges an array into a wave-like pattern where elements alternate between being greater than or equal to their adjacent elements. The resulting pattern should follow: a1 ≥ a2 ≤ a3 ≥ a4 ≤ a5 ...

## Requirements
- Implement `createWaveArray(arr: number[]): number[]`
- In the output array:
  - Even-indexed elements (arr[0], arr[2], etc.) should be greater than or equal to their adjacent elements
  - Odd-indexed elements (arr[1], arr[3], etc.) should be less than or equal to their adjacent elements 
- All integers in the array should be used exactly once
- If multiple valid arrangements are possible, any valid solution is acceptable

## Examples
```javascript
// Example 1:
createWaveArray([1, 2, 3, 4])
// Returns: [2, 1, 4, 3]
// Explanation: 
// 2 >= 1 (valid)
// 1 <= 4 (valid)
// 4 >= 3 (valid)

// Example 2:
createWaveArray([1, 5, 1, 1, 6, 4])
// Returns: [5, 1, 6, 1, 4, 1]
// Explanation:
// 5 >= 1 (valid)
// 1 <= 6 (valid)
// 6 >= 1 (valid)
// 1 <= 4 (valid)
// 4 >= 1 (valid)

// Example 3:
createWaveArray([2, 2, 2])
// Returns: [2, 2, 2]
// Explanation: With equal elements, any arrangement is wave-like since all conditions are satisfied

// Example 4:
createWaveArray([])
// Returns: []
// Explanation: Empty array remains empty
```

## Constraints
- 0 ≤ arr.length ≤ 10⁴
- -10⁵ ≤ arr[i] ≤ 10⁵