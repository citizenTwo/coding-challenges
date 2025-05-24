const assert = require('assert');
const { maximizeAdjustment } = require('./solution');

// Helper to check for mutation
function isMutated(original, result) {
  return original.some((inv, i) => inv !== result[i]);
}

// Test 1: Basic example
(() => {
  const invoices = [
    { amount: 300, status: 'Pending' },
    { amount: 400, status: 'Pending' },
    { amount: 500, status: 'Pending' }
  ];
  const result = maximizeAdjustment(700, invoices);
  assert.strictEqual(result.filter(inv => inv.status === 'Adjusted').length, 2);
  assert.strictEqual(result.reduce((sum, inv) => sum + (inv.status === 'Adjusted' ? inv.amount : 0), 0), 700);
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();

// Test 2: No invoice can be adjusted
(() => {
  const invoices = [
    { amount: 100, status: 'Pending' },
    { amount: 200, status: 'Pending' }
  ];
  const result = maximizeAdjustment(50, invoices);
  assert(result.every(inv => inv.status === 'Pending'));
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();

// Test 3: All invoices can be adjusted
(() => {
  const invoices = [
    { amount: 100, status: 'Pending' },
    { amount: 200, status: 'Pending' },
    { amount: 300, status: 'Pending' }
  ];
  const result = maximizeAdjustment(600, invoices);
  assert(result.every(inv => inv.status === 'Adjusted'));
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();

// Test 4: Multiple combinations possible
(() => {
  const invoices = [
    { amount: 200, status: 'Pending' },
    { amount: 250, status: 'Pending' },
    { amount: 300, status: 'Pending' },
    { amount: 350, status: 'Pending' }
  ];
  const result = maximizeAdjustment(500, invoices);
  const adjustedSum = result.reduce((sum, inv) => sum + (inv.status === 'Adjusted' ? inv.amount : 0), 0);
  assert(adjustedSum <= 500);
  assert(adjustedSum === 500);
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();

console.log('All tests passed!');

// Edge Case 1: Empty invoice list
(() => {
  const invoices = [];
  const result = maximizeAdjustment(1000, invoices);
  assert(Array.isArray(result));
  assert.strictEqual(result.length, 0);
})();

// Edge Case 2: Security deposit is zero
(() => {
  const invoices = [
    { amount: 100, status: 'Pending' },
    { amount: 200, status: 'Pending' }
  ];
  const result = maximizeAdjustment(0, invoices);
  assert(result.every(inv => inv.status === 'Pending'));
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();

// Edge Case 3: All invoices have amount zero
(() => {
  const invoices = [
    { amount: 0, status: 'Pending' },
    { amount: 0, status: 'Pending' }
  ];
  const result = maximizeAdjustment(100, invoices);
  assert(result.every(inv => inv.status === 'Adjusted'));
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();

// Edge Case 4: Security deposit less than smallest invoice
(() => {
  const invoices = [
    { amount: 10, status: 'Pending' },
    { amount: 20, status: 'Pending' }
  ];
  const result = maximizeAdjustment(5, invoices);
  assert(result.every(inv => inv.status === 'Pending'));
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();

// Edge Case 5: All invoices have the same amount
(() => {
  const invoices = [
    { amount: 50, status: 'Pending' },
    { amount: 50, status: 'Pending' },
    { amount: 50, status: 'Pending' }
  ];
  const result = maximizeAdjustment(100, invoices);
  const adjustedCount = result.filter(inv => inv.status === 'Adjusted').length;
  assert(adjustedCount === 2);
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();

// Edge Case 6: Only one invoice, exactly matches deposit
(() => {
  const invoices = [
    { amount: 123, status: 'Pending' }
  ];
  const result = maximizeAdjustment(123, invoices);
  assert(result.length === 1);
  assert(result[0].status === 'Adjusted');
  assert(!isMutated(invoices, result), 'Original objects should not be mutated');
})();
