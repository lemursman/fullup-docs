---
sidebar_position: 2
---

# Webhook security

To ensure the security and integrity of the data received through webhooks, Fullup allows you to verify webhook requests.

This process ensures that the requests your server receives are indeed from Fullup, protecting against spoofing and other malicious activities.

## How verification works

When Fullup sends a webhook event, it includes a custom header, `fullup-signature`, in the request. This signature is a hexadecimal string generated by hashing the webhook's payload with a secret key shared between Fullup and your server.

By verifying this signature on your server, you can confirm the request's authenticity.

## Steps to Verify a Webhook Request

1. **Extract the signature.** Retrieve the `fullup-signature` header from the incoming webhook request. This header contains the signature you need to verify.

1. **Generate a signature on your server.** After you create a webhook for your Fullup site, you will be provided a secret value. You should never expose a webhook secret value in a public way. Use the secret Fullup provided to generate a signature on your server. Hash the entire request body using the HMAC SHA-256 algorithm and the shared secret key to produce a signature on your server.

1. **Compare the signatures.** Compare the signature you generated with the `fullup-signature` header from the webhook request. If they match, the request is verified as coming from Fullup.

## Example code

Here are some examples of how you might implement the verification process:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="node"
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
]}>

  <TabItem value="node">
    ```javascript
    const express = require('express');
    const crypto = require('crypto');

    const app = express();

    app.use(express.json());

    app.post('/webhook-endpoint', (req, res) => {
      // Grab the fullup-signature header value
      const receivedSignature = req.headers['fullup-signature'];

      const body = req.body;

      const secret = 'your_shared_secret_key'; // Provided after you create a webhook in your Fullup settings.

      // Generate the signature based on the request body
      const expectedSignature = crypto.createHmac('sha256', secret)
        .update(JSON.stringify(body))
        .digest('hex');

      // Compare the received signature with the expected signature
      if (receivedSignature === expectedSignature) {
        console.log('Verification successful. The request is from Fullup.');

        // Do whatever you want with the webbook payload
        console.log('Webhook payload:', body);

        res.status(200).send('Webhook processed successfully.');
      } else {
        console.log('Verification failed. The request might not be from Fullup.');

        res.status(403).send('Failed to verify the webhook signature.');
      }
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(Server running on port ${PORT}));
    ```

  </TabItem>

  <TabItem value="python">
    ```python
    from flask import Flask, request, jsonify
    import hashlib
    import hmac
    import os

    app = Flask(__name__)

    @app.route('/webhook-endpoint', methods=['POST'])
    def verify_webhook():
        received_signature = request.headers.get('fullup-signature')
        body = request.get_data(as_text=True)
        secret = 'your_shared_secret_key'  # This should be the same secret shared by Fullup.

        # Generate the signature based on the request body
        expected_signature = hmac.new(
            key=secret.encode(),
            msg=body.encode(),
            digestmod=hashlib.sha256
        ).hexdigest()

        # Compare the received signature with the expected signature
        if hmac.compare_digest(received_signature, expected_signature):
            print('Verification successful. The request is from Fullup.')
            # Process the webhook payload as needed
            print('Webhook payload:', request.json)

            return jsonify({'message': 'Webhook processed successfully.'}), 200
        else:
            print('Verification failed. The request might not be from Fullup.')
            return jsonify({'message': 'Failed to verify the webhook signature.'}), 403

    if __name__ == '__main__':
        PORT = os.environ.get('PORT', 3000)
        app.run(port=PORT, debug=True)
    ```

  </TabItem>
</Tabs>