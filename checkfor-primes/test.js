const filterPrimes = require('./solution');
const testInputs = require('./test-inputs.json');

testInputs.testCases.forEach(({ input, expected }, index) => {
    const result = filterPrimes(input);
    console.log(`Test Case ${index + 1}:`, JSON.stringify(result) === JSON.stringify(expected) ? 'Passed' : 'Failed');
});
