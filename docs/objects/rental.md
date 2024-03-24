---
sidebar_position: 4
---

# Rental

The Rental object represents a rental transaction within Fullup, detailing the rental period, associated products, and the status of the rental.

This object is crucial for managing rentals, tracking their status, and integrating rental data with other systems.

## JSON Structure

```typescript
{
  id: string,
  startDate: string,
  endDate: string,
  rentalProducts: RentalProduct[]
}
```

### Fields

- **id**: `string` - The unique identifier of the rental.
- **startDate**: `string` - The start date of the rental period, in ISO 8601 format.
- **endDate**: `string` - The end date of the rental period, in ISO 8601 format.
- **rentalProducts**: An array of [RentalProduct](./rental-product.md) objects.

## Usage

The Rental object is used within Fullup to:

- Track and manage the lifecycle of a rental transaction.
- Provide customers with information about their rental status.
- Integrate rental data with inventory management systems to update product availability.
- Generate reports and insights on rental performance and customer usage patterns.

## Error Handling

In the event of an error or if the rental information is not available, the function designed to fetch the Rental object will return default values for each field. This ensures that the system can gracefully handle errors or missing data, maintaining operational continuity and user experience.
