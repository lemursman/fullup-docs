---
sidebar_position: 6
---

# Product

The Product object encapsulates all the details of a product available for rental or purchase within Fullup. It includes information such as the product's unique identifier, name, and a URL to view the product on the Fullup website.

## JSON Structure

```typescript
{
  id: string,
  name: string,
  url: string,
}
```

### Fields

- **id**: `string` - The unique identifier of the product.
- **name**: `string` - The name of the product.
- **url**: `string` - A URL linking to the product's detail page on the Fullup website.

## Usage

The Product object is used to:

- Display product information in user interfaces, allowing customers to explore available products.
- Link directly to the product's detail page for more information or to initiate a rental or purchase.
- Integrate product data with other systems, such as inventory management or marketing tools.

## Error Handling

In the event of an error or if the product information is not available, the function designed to fetch the Product object will return default values for each field. This ensures that the system can handle missing or incomplete data gracefully, maintaining operational continuity and user experience.
