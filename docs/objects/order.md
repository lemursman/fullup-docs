---
sidebar_position: 3
---

# Order

The Order object is a fundamental entity within Fullup, encapsulating all the details related to an order placed within the system.

This object is essential for tracking order status, managing financials, and providing users with transactional information.

## JSON Structure

```typescript
{
  id: string,
  subtotal: number,
  tax: number,
  total: number,
  currencyIso: string,
  method: 'PICKUP' | 'DELIVERY',
  createdAt: string,
  url: string,
  status: 'PENDING' | 'CONFIRMED' | 'PREPARED' | 'RENTED' | 'DAMAGED' | 'LOST' | 'COMPLETED' | 'CANCELED',
}
```

### Fields

- **id**: `string` - The unique identifier of the order.
- **subtotal**: `number` - The subtotal amount of the order before tax, **in cents**.
- **tax**: `number` - The tax amount applied to the order, **in cents**.
- **total**: `number` - The total amount of the order, including tax, **in cents**.
- **currencyIso**: `string` - The ISO currency code for the order, e.g., `USD`.
- **method**: `'PICKUP' | 'DELIVERY'` - The method of fulfillment for the order.
- **createdAt**: `string` - The timestamp when the order was created, in ISO 8601 format.
- **url**: `string` - A URL linking to the order's details page on the Fullup website.
- **status**: `'PENDING' | 'CONFIRMED' | 'PREPARED' | 'RENTED' | 'DAMAGED' | 'LOST' | 'COMPLETED' | 'CANCELED'` - The current status of the order, indicating its progress and condition. See more details below.

#### `status` descriptions

- **`PENDING`**: The payment intent has been created, but payment has not yet succeeded.
- **`CONFIRMED`**: Payment has succeeded, and the order is confirmed.
- **`PREPARED`**: The order has been prepared for pickup or delivery.
- **`RENTED`**: The order has been picked up or delivered, and the rental period is active.
- **`DAMAGED`**: The order or rental item has been returned damaged.
- **`LOST`**: The order or rental item has been reported lost.
- **`COMPLETED`**: The order has been fulfilled, and all associated transactions are settled.
- **`CANCELED`**: The order has been canceled prior to completion.

## Usage

The Order object is utilized in various parts of Fullup to:

- Provide users with detailed information about their orders.
- Enable administrators to track and manage orders within the system.
- Facilitate financial reporting and analysis based on order data.
- Support integrations with external systems, such as inventory management or accounting software.

## Error Handling

Should there be any issue retrieving an order or if the order data is not available, the function designed to fetch the Order object will return default values for each field. This ensures that the system can gracefully handle errors or missing data without disrupting the user experience or backend processes.
