# Anagram Groups Counter

Create a function that takes an array of strings as input and returns the number of distinct groups of anagrams present in the array.

## Requirements
- Implement `countAnagramGroups(words: string[]): number`
- Words are considered anagrams if they contain exactly the same letters (case-sensitive)   
 

## Examples
```typescript
countAnagramGroups(["eat", "tea", "tan", "ate", "nat", "bat"]);
// Returns: 3
// Explanation: 
// Group 1: "eat", "tea", "ate"
// Group 2: "tan", "nat"
// Group 3: "bat"

countAnagramGroups([""]); 
// Returns: 1
// Explanation: Empty string forms its own group

countAnagramGroups(["listen", "silent", "inlets"]);
// Returns: 1
// Explanation: All words are anagrams of each other

countAnagramGroups(["hello", "world"]);
// Returns: 2
// Explanation: No anagrams found, each word forms its own group

countAnagramGroups(["cat", "cat", "cat"]);
// Returns: 1
// Explanation: Duplicates belong to the same group
```

## Constraints
- 1 ≤ words.length ≤ 10⁴
- 0 ≤ words[i].length ≤ 100
- words[i] consists of lowercase English letters