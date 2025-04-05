/**
 * Determines if the result string can be formed by interleaving str1 and str2
 * @param {string} str1 - The first input string
 * @param {string} str2 - The second input string
 * @param {string} result - The string to check if it's a valid interleaving
 * @return {boolean} - True if result is a valid interleaving of str1 and str2
 */
function isValidInterleave(str1, str2, result) {
    // Check if lengths match
    if (str1.length + str2.length !== result.length) {
        return false;
    }

    // Create DP table
    const dp = Array(str1.length + 1).fill(null)
        .map(() => Array(str2.length + 1).fill(false));
    
    // Initialize base case
    dp[0][0] = true;

    // Fill first row (when str1 is empty)
    for (let j = 1; j <= str2.length; j++) {
        dp[0][j] = dp[0][j-1] && str2[j-1] === result[j-1];
    }

    // Fill first column (when str2 is empty)
    for (let i = 1; i <= str1.length; i++) {
        dp[i][0] = dp[i-1][0] && str1[i-1] === result[i-1];
    }

    // Fill rest of the table
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i-1] === result[i+j-1]) {
                dp[i][j] = dp[i][j] || dp[i-1][j];
            }
            if (str2[j-1] === result[i+j-1]) {
                dp[i][j] = dp[i][j] || dp[i][j-1];
            }
        }
    }

    return dp[str1.length][str2.length];
}

module.exports = isValidInterleave;