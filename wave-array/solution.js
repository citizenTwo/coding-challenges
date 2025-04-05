/**
 * Rearranges an array into a wave-like pattern where elements alternate between being greater than or equal to their adjacent elements
 * @param {number[]} arr - Array to be arranged in wave pattern
 * @returns {number[]} - The same array modified in-place to form a wave pattern
 */
function createWaveArray(arr) {
    // Handle empty or single element arrays
    if (arr.length <= 1) return arr;
    
    // For each pair of elements (0,1), (2,3), etc.
    for (let i = 0; i < arr.length - 1; i += 2) {
        // For even indices, ensure current element is >= next element
        if (arr[i] < arr[i + 1]) {
            // Swap elements to create peak
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
        
        // For the last element in odd-length array
        if (i === arr.length - 3 && arr[i + 2] > arr[i + 1]) {
            // Ensure last element follows pattern
            [arr[i + 1], arr[i + 2]] = [arr[i + 2], arr[i + 1]];
        }
    }
    
    return arr;
}

module.exports = { createWaveArray };