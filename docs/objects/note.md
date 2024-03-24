---
sidebar_position: 7
---

# Note

The Note object represents a note or annotation within Fullup, typically associated with orders, rentals, or user accounts. It contains information such as the note's content, type, and associated user or order.

They can be found nested within corresponding objects, such as nested within orders.

## JSON Structure

```typescript
{
  id: string,
  content: string,
  type: 'INTERNAL' | 'CUSTOMER' | 'ADMIN_PUBLIC',
}
```

### Fields

- **id**: `string` - The unique identifier of the note.
- **content**: `string` - The textual content of the note.
- **type**: `'INTERNAL' | 'CUSTOMER' | 'ADMIN_PUBLIC'` The note type. See more information below.

#### `type` descriptions

- **`INTERNAL`**: Notes intended solely for the internal staff of the organization.
- **`CUSTOMER`**: Notes designed to be shared with or visible to the customer. They are also visible to staff.
- **`ADMIN_PUBLIC`**: Public notes made by administrators intended to be visible to a customer.

## Usage

The Note object is used to:

- Attach additional information or comments to orders, rentals, or user accounts.
- Provide a mechanism for staff to communicate internally or leave reminders about specific items.
- Optionally, share information with customers through notes marked as `ADMIN_PUBLIC`.

## Error Handling

In case of an error or if the note information is not available, the function designed to fetch the Note object will return default values for each field. This ensures that the system can handle missing or incomplete data gracefully, maintaining operational continuity and user experience.
