---
sidebar_position: 1
---

# Address

This object is typically used to represent a user's address in various parts of Fullup, such as contact or user profile information.

It can also be used in contexts where an address needs to be displayed or processed, such as in order confirmations or organization locations.

### JSON structure

```typescript
{
  firstName: string,
  lastName: string,
  lineOne: string,
  lineTwo: string,
  city: string,
  state: string,
  postCode: string,
  country: string,
  email: string,
  phoneNumber: string,
  lat: number | undefined,
  lng: number | undefined
}
```

### Fields

- **firstName**: `string` - The first name associated with the address, if available.
- **lastName**: `string` - The last name associated with the address, if available.
- **lineOne**: `string` - The primary address line.
- **lineTwo**: `string` - The secondary address line (e.g., apartment, suite number).
- **city**: `string` - The city of the address.
- **state**: `string` - The state, province, or region of the address.
- **postCode**: `string` - The postal or ZIP code of the address.
- **country**: `string` - The country of the address, represented as an ISO 3166-1 alpha-2 country code.
- **email**: `string` - The email address associated with this address, if available.
- **phoneNumber**: `string` - The phone number associated with this address, if available.
- **lat**: `number | undefined` - The latitude coordinate of the address, if available.
- **lng**: `number | undefined` - The longitude coordinate of the address, if available.

## Error Handling

In case of an error or if the address information is not available, the function returns an object with default values, where string fields are empty strings (`""`) and nubers are `undefined`.
