---
sidebar_position: 8
---

# Document Agreement

The Document Agreement object encapsulates details about a document agreement within Fullup, including a URL to view the signed agreement document. This object is crucial for managing and accessing agreements that users have consented to, such as waivers or damage agreements.

## JSON Structure

```typescript
{
  url: string,
}
```

### Fields

- **url**: `string` - A URL that directs to the view page of the signed document agreement. This allows for easy access to the document for both administrative purposes and for the user to review their agreement.

## Usage

The Document Agreement object is used to:

- Provide a direct link to view or download signed agreements, enhancing transparency and accessibility for users.
- Simplify the management of document agreements by centralizing access to the documents through a single URL.
- Support legal and compliance requirements by ensuring that signed agreements are easily retrievable.

## Error Handling

In case of an error or if the document agreement information is not available, the function designed to fetch the Document Agreement object will return a default value for the URL field. i.e. an empty string. This ensures that the system can handle missing or incomplete data gracefully, maintaining operational continuity and user experience.
