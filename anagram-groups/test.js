const { countAnagramGroups } = require('./solution');
const testCases = require('./test-inputs.json').testCases;

function runTests() {
    let passed = 0;
    let failed = 0;

    testCases.forEach((testCase, index) => {
        const result = countAnagramGroups(testCase.input);
        const success = result === testCase.expected;
        
        if (success) {
            passed++;
            console.log(`✓ Test case ${index + 1} passed: ${testCase.description}`);
        } else {
            failed++;
            console.log(`✗ Test case ${index + 1} failed: ${testCase.description}`);
            console.log(`  Expected: ${testCase.expected}`);
            console.log(`  Got: ${result}`);
            console.log(`  Input: ${JSON.stringify(testCase.input)}`);
        }
    });

    console.log(`\nTest Summary:`);
    console.log(`Total: ${testCases.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
}

runTests();