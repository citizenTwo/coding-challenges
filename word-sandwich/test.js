const isValidInterleave = require('./solution');
const testInputs = require('./test-inputs.json');

function runTests() {
    console.log('Running Word Sandwich Tests...\n');
    let passed = 0;
    
    testInputs.testCases.forEach((testCase, index) => {
        const { str1, str2, result, expected } = testCase;
        const actual = isValidInterleave(str1, str2, result);
        
        if (actual === expected) {
            console.log(`✅ Test ${index + 1} Passed`);
            passed++;
        } else {
            console.log(`❌ Test ${index + 1} Failed`);
            console.log(`   Inputs: str1="${str1}", str2="${str2}", result="${result}"`);
            console.log(`   Expected: ${expected}, Got: ${actual}\n`);
        }
    });
    
    console.log(`\nTests Complete: ${passed}/${testInputs.testCases.length} passed`);
}

runTests();