---
sidebar_position: 5
---

# Rental Product

The Rental Product object provides detailed information about each product included in a rental transaction within Fullup. It includes the quantity of the product rented, the total cost, and the tax applied.

## JSON Structure

```typescript
{
  quantity: number,
  total: number,
  tax: number,
  product: Product
}
```

### Fields

- **quantity**: `number` - The number of units of the product included in the rental.
- **total**: `number` - The total cost charged for this product in the rental, **in cents**.
- **tax**: `number` - The tax amount charged for this product in the rental, **in cents**.
- **product**: A [Product](./product.md) object.

## Usage

The Rental Product object is used to:

- Provide a breakdown of each product included in a rental, allowing for detailed financial tracking and inventory management.
- Calculate the total cost and tax of a rental transaction based on the individual products included.
- Offer insights into the popularity and usage of products within rental transactions.

## Error Handling

In case of an error or if the rental product information is not available, the function designed to fetch the Rental Product object will return default values for each field. This ensures that the system can handle missing or incomplete data gracefully, maintaining operational continuity.
