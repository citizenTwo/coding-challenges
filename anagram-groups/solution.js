/**
 * Counts the number of distinct anagram groups in an array of strings
 * @param {string[]} words - Array of strings to analyze
 * @returns {number} - Number of distinct anagram groups
 */
function countAnagramGroups(words) {
    // Use a Map to group words by their sorted characters
    const groups = new Map();
    
    for (const word of words) {
        // Sort the characters to create a key that will be the same for all anagrams
        // This preserves spaces and special characters while normalizing character order
        const key = word.split('').sort().join('');
        
        // Get or create the group for this key
        if (!groups.has(key)) {
            groups.set(key, new Set());
        }
        
        // Add the word to its group
        // Using a Set automatically handles duplicates
        groups.get(key).add(word);
    }
    
    // Return the number of distinct groups
    return groups.size;
}

// Export for testing
module.exports = { countAnagramGroups };