const { createWaveArray } = require('./solution');
const testCases = require('./test-inputs.json').testCases;

function isValidWave(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            // Even index should be >= adjacent elements
            if ((i > 0 && arr[i] < arr[i-1]) || 
                (i < arr.length-1 && arr[i] < arr[i+1])) {
                return false;
            }
        } else {
            // Odd index should be <= adjacent elements
            if ((i > 0 && arr[i] > arr[i-1]) || 
                (i < arr.length-1 && arr[i] > arr[i+1])) {
                return false;
            }
        }
    }
    return true;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
}

function runTests() {
    let passed = 0;
    let failed = 0;

    testCases.forEach((testCase, index) => {
        const input = [...testCase.input]; // Create a copy for testing
        const result = createWaveArray(input);
        
        // Check if the result is a valid wave array
        const isWave = isValidWave(result);
        
        // If an expected result is provided, check if it matches
        const matchesExpected = arraysEqual(result, testCase.expected);
        
        // Test passes if result is a valid wave array AND matches expected result (if provided)
        const success = isWave && (matchesExpected || testCase.expected === undefined);
        
        if (success) {
            passed++;
            console.log(`✓ Test case ${index + 1} passed: ${testCase.description}`);
        } else {
            failed++;
            console.log(`✗ Test case ${index + 1} failed: ${testCase.description}`);
            console.log(`  Input: [${testCase.input.join(', ')}]`);
            console.log(`  Output: [${result.join(', ')}]`);
            if (!isWave) {
                console.log('  Error: Output is not a valid wave array');
            }
            if (testCase.expected !== undefined && !matchesExpected) {
                console.log(`  Expected: [${testCase.expected.join(', ')}]`);
            }
        }
    });

    console.log(`\nTest Summary:`);
    console.log(`Total: ${testCases.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
}

runTests();