# Security Deposit Adjustment

Create a function that processes a list of pending invoices against a security deposit, determining how to split or adjust each invoice based on the available deposit amount.

## Requirements
- Implement `processSecurityDeposit(securityDeposit: number, invoices: Invoice[]): AdjustmentResult`
- Process invoices in input order, all input invoices will be in "Pending" state.
- If security deposit can fully cover an invoice, change invoice status to "Adjusted"
- If security deposit cannot cover an invoice at all, change invoice status to "Uncollectable"
- If security deposit can partially cover an invoice, split it into two new invoices:
  - One "Adjusted" invoice for the covered portion
  - One "Uncollectable" invoice for the remaining portion 

## Interface Definitions
```typescript
interface Invoice {
    amount: number; 
    status: 'Pending' |  'Adjusted' | 'Uncollectable';
}

interface AdjustmentResult {
    processedInvoices: Invoice[];
    remainingDeposit: number;
}
```

## Example
```typescript
const result = processSecurityDeposit(1000, [
    { amount: 300,  status: 'Pending' },
    { amount: 400,  status: 'Pending' }
]);

// Result will be:
{
    processedInvoices: [
        { amount: 300, status: 'Adjusted' },
        { amount: 400, status: 'Adjusted' }
    ],
    remainingDeposit: 300
}
```


## Example
```typescript
const result = processSecurityDeposit(1000, [
    { amount: 400,  status: 'Pending' },
    { amount: 400,  status: 'Pending' },
    { amount: 400,  status: 'Pending' }
]);

// Result will be:
{
    processedInvoices: [
        { amount: 400, status: 'Adjusted' },
        { amount: 400, status: 'Adjusted' },
        { amount: 200, status: 'Adjusted' },
        { amount: 200, status: 'Uncollectable'}
    ],
    remainingDeposit: 0
}
```



## Example
```typescript
const result = processSecurityDeposit(1000, [
    { amount: 400,  status: 'Pending' },
    { amount: 400,  status: 'Pending' },
    { amount: 400,  status: 'Pending' },
    { amount: 400,  status: 'Pending' },
]);

// Result will be:
{
    processedInvoices: [
        { amount: 400, status: 'Adjusted' },
        { amount: 400, status: 'Adjusted' },
        { amount: 200, status: 'Adjusted' },
        { amount: 200, status: 'Uncollectable'}
        { amount: 400, status: 'Uncollectable'}
    ],
    remainingDeposit: 0
}
```
