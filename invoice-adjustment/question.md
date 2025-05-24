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

## Example

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

**Note:**  
If you mutate the original invoice objects, you may fail hidden tests that check for object identity and reference integrity.
