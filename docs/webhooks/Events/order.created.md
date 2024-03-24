---
sidebar_position: 10
---

# `order.created`

The `order.created` webhook is triggered whenever a new order is successfully created within the Fullup system. This webhook provides a comprehensive payload containing detailed information about the order, enabling external systems to react to new orders in real-time.

## Webhook Payload

The payload for the `order.created` webhook includes detailed information about the newly created order, structured as follows:

```typescript
{
  event: 'order.created',
  data: {
    order: Order,
    rentals: Rental[],
    orgLocation: OrgLocation,
    notes: Note[],
    documentAgreements: DocumentAgreement[],
    address: Address
  },
}
```

### Fields

- **event**: `string` - The event name, `order.created`.
- **data**: An object containing relevant order objects.

#### `data` objects

- **order**: An [Order](../../objects//order.md) object.
- **rentals**: An array of [Rental](../../objects//rental.md) objects, which includes nested [RentalProduct](../../objects/rental-product.md) and [Product](../../objects/product.md) objects.
- **orgLocation**: An [Organization Location](../../objects/org-location.md) object.
- **notes**: An array of [Note](../../objects/note.md) objects.
- **documentAgreements**: An array of [Document Agreement](../../objects/document-agreement.md) objects.
- **address**: An [Address](../../objects/address.md) object representing the customer's address.

## Sample payload

```typescript
{
  "event": "order.created",
  "data": {
    "order": {
      "id": "clu4vbgnv000k10ari7ybonyw",
      "subtotal": 10000,
      "tax": 0,
      "total": 10000,
      "currencyIso": "USD",
      "method": "DELIVERY",
      "createdAt": "2024-03-24T01:56:23.707Z",
      "url": "https://staging.soireegear.com/order/clu4vbgnv000k10ari7ybonyw",
      "status": "CONFIRMED"
    },
    "rentals": [
      {
        "id": "clu4vbgnv000m10arze5e2d8w",
        "startDate": "2024-03-28T16:00:00.000Z",
        "endDate": "2024-03-28T20:00:00.000Z",
        "rentalProducts": [
          {
            "quantity": 1,
            "total": 10000,
            "tax": 0,
            "product": {
              "id": "cltysuu0100026h58h1e6fd7x",
              "name": "Test product",
              "url": "https://staging.soireegear.com/product/cltysuu0100026h58h1e6fd7x/test-product"
            }
          }
        ]
      }
    ],
    "orgLocation": {
      "id": "cltueaxgt00022u283dsjmvld",
      "name": "Miami",
      "isActive": true,
      "currencyIso": "USD",
      "isOpenToPublic": false,
      "allowsDelivery": true,
      "allowsPickup": true,
      "shouldChargeFlatTax": false,
      "flatTaxRate": 0,
      "timezone": "America/New_York",
      "locale": "en-US",
      "distanceUnit": "mi"
    },
    "notes": [
      {
        "id": "clu4vbgnv000p10ar472p220m",
        "content": "Please leave it in the front yard. Thanks!",
        "type": "CUSTOMER"
      }
    ],
    "documentAgreements": [],
    "address": {
      "firstName": "Fred",
      "lastName": "Jones",
      "lineOne": "61 Northeast 41st Street",
      "lineTwo": "",
      "city": "Miami",
      "state": "Florida",
      "postCode": "33137",
      "country": "US",
      "email": "fullup-test@yopmail.com",
      "phoneNumber": "9195006816",
      "lat": 25.814354,
      "lng": -80.194278
    }
  }
}
```

## Usage

The `order.created` webhook can be used to:

- Update external inventory management systems with new order details.
- Trigger external billing or invoicing systems to process payments.
- Notify customer service or fulfillment teams about new orders.
- Log or audit order creation events for analytics or compliance.

## Error Handling

Subscribers to the `order.created` webhook should implement error handling to manage scenarios where the webhook delivery fails or the payload is incomplete. This may involve retry mechanisms or alerts to ensure that no critical information is lost or overlooked.
