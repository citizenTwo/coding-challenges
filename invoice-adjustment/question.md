# Invoice Adjustment Maximization

You are given a security deposit and a list of invoices (each with an `amount` and `status: "Pending"`). Select a subset of invoices (no splitting allowed) so that:

- The total amount of selected invoices does not exceed the security deposit.
- The sum of selected invoice amounts is maximized.

Return a **new array** of invoices with their status changed to `"Adjusted"` if selected, or `"Pending"` if not. Do **not** mutate the original invoice objects.

## Function Signature

```typescript
function maximizeAdjustment(securityDeposit: number, invoices: Invoice[]): Invoice[]
// Invoice: { amount: number, status: "Pending" | "Adjusted" }
```


## Example 1

```js
const invoices = [
  { amount: 300, status: "Pending" },
  { amount: 400, status: "Pending" },
  { amount: 500, status: "Pending" }
];
const result = maximizeAdjustment(700, invoices);
// Possible valid output (max sum 700):
// [
//   { amount: 300, status: "Adjusted" },
//   { amount: 400, status: "Adjusted" },
//   { amount: 500, status: "Pending" }
// ]
```

## Example 2

```js
const invoices = [
  { amount: 200, status: "Pending" },
  { amount: 250, status: "Pending" },
  { amount: 300, status: "Pending" },
  { amount: 350, status: "Pending" }
];
const result = maximizeAdjustment(500, invoices);
// Possible valid output (max sum 500):
// [
//   { amount: 200, status: "Adjusted" },
//   { amount: 250, status: "Adjusted" },
//   { amount: 300, status: "Pending" },
//   { amount: 350, status: "Pending" }
// ]
// or
// [
//   { amount: 200, status: "Pending" },
//   { amount: 250, status: "Pending" },
//   { amount: 300, status: "Adjusted" },
//   { amount: 350, status: "Adjusted" }
// ]
// (as long as the sum is maximized and does not exceed 500)
```

## Example 3

```js
const invoices = [
  { amount: 100, status: "Pending" },
  { amount: 200, status: "Pending" },
  { amount: 300, status: "Pending" }
];
const result = maximizeAdjustment(50, invoices);
// Output:
// [
//   { amount: 100, status: "Pending" },
//   { amount: 200, status: "Pending" },
//   { amount: 300, status: "Pending" }
// ]
// (no invoice can be adjusted)
```

## Example 4

```js
const invoices = [
  { amount: 100, status: "Pending" },
  { amount: 200, status: "Pending" },
  { amount: 300, status: "Pending" }
];
const result = maximizeAdjustment(600, invoices);
// Output:
// [
//   { amount: 100, status: "Adjusted" },
//   { amount: 200, status: "Adjusted" },
//   { amount: 300, status: "Adjusted" }
// ]
// (all invoices can be adjusted)
```

**Note:**  
If you mutate the original invoice objects, you may fail hidden tests that check for object identity and reference integrity.
