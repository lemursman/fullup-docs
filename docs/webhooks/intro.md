---
sidebar_position: 1
---

# About webhooks

Fullup alone radically improves automation for your rental business. If you want to extend automation to third party applications outside of Fullup, integrate webhooks into your operations.

## Setting up webhooks with Fullup

1. Once signed in as an admin on your Fullup site, go to `Settings`, and click on `Webhooks` under `Integrations`.
1. Define a URL endpoint on your server to receive webhook data.
1. Provide the URL where Fullup should send events.
1. Configure the events (i.e. `scope`) that should trigger the webhook.

This setup enables your business to start receiving real-time data from Fullup without delay.

## Payload structure

Every webhook fired from Fullup follows this structure:

```typescript
{
  event: string; // The name of the event, such as order.created
  data: Object; // An object containing relevant data about the event
}
```

The exact structure of the `data` object is defined for [each event](/docs/category/events). Generally, the `data` object contains one or more Fullup data objects, as defined [here](/docs/category/objects).

## Timeouts

Your webhook endpoint has, at most, 25 seconds to respond to a webhook request from Fullup.

After 25 seconds, the request will time out on Fullup's end.

## Security

Learn more about how you can verify webhooks in the [Webhook security](./security.md) section.
