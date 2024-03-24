---
sidebar_position: 2
---

# Organization Location

The Organization Location object is a key component within Fullup, representing the physical or virtual locations associated with an organization.

This object is crucial for managing different operational areas, setting up service zones, and customizing offerings based on location-specific parameters.

## JSON Structure

```typescript
{
  id: string,
  name: string,
  isActive: boolean,
  currencyIso: string,
  isOpenToPublic: boolean,
  allowsDelivery: boolean,
  allowsPickup: boolean,
  shouldChargeFlatTax: boolean,
  flatTaxRate: number,
  timezone: string,
  locale: string,
  distanceUnit: 'mi' | 'km',
}
```

### Fields

- **id**: `string` - A unique identifier for the location.
- **name**: `string` - The name of the location.
- **isActive**: `boolean` - Indicates whether the location is active and operational.
- **currencyIso**: `string` - The ISO currency code for transactions at this location, e.g. `USD`.
- **isOpenToPublic**: `boolean` - Whether the location is open to the public.
- **allowsDelivery**: `boolean` - Indicates if the location supports delivery services.
- **allowsPickup**: `boolean` - Indicates if the location supports pickup services.
- **shouldChargeFlatTax**: `boolean` - Determines if a flat tax rate is applied to transactions.
- **flatTaxRate**: `number` - The flat tax rate percentage, defaulting to `0`.
- **timezone**: `string` - The timezone of the location, defaulting to "America/New_York" if not specified.
- **locale**: `string` - The locale setting for the location.
- **distanceUnit**: `'mi' | 'km'` - The unit of distance measurement used by the location, with `'mi'` for miles and `'km'` for kilometers.

## Usage

Organization Location objects are used across Fullup to:

- Define service areas and operational zones.
- Customize offerings and services based on location-specific settings.
- Manage tax rates and currency settings for different regions.
- Schedule events and operations according to local time zones.

## Error Handling

In the event of an error or if the location information is not available, the function will return an object with default values, ensuring that the system can handle missing or incomplete data gracefully.
