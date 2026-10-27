# Solvecha NodeJS captcha client - picture and text recognition

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/maxshydev)  
[![GitHub stars](https://img.shields.io/github/stars/blackravenx/captcha-libs.svg?style=social&label=Star)](https://github.com/blackravenx/captcha-libs)  
Docs: [https://solvecha.com/docs](https://solvecha.com/docs)

Solvecha recognises pictures and text. It has no token tasks (no reCAPTCHA token, hCaptcha, Turnstile and so on).
Supported tasks: `ReCaptchaV2Classification` (image and question) and `ImageToTextTask`.

## Installation

`npm i @captcha-libs/solvecha`

### Usage

```javascript
import { Solvecha, ReCaptchaV2Classification } from "@captcha-libs/solvecha";

const solvechaClient = new Solvecha({
  clientKey: "<YOUR_API_KEY>",
  pollingInterval: 2000, // optional, default: 2000ms
  timeout: 120_000, // optional, default: 120000ms
});

const request = new ReCaptchaV2Classification({
  image: "<BASE64_IMAGE>",
  question: "/m/04_sv",
});

const { solution } = await solvechaClient.solve(request);

// solution.objects: tile numbers counted from 0 (grid), solution.hasObject (single tile)
```

```javascript
import { Solvecha, ImageToTextTask } from "@captcha-libs/solvecha";

const { solution } = await solvechaClient.solve(
  new ImageToTextTask({ body: "<BASE64_IMAGE>" })
);

// solution.text
```

### Balance

```javascript
const { balance } = await solvechaClient.getBalance();
```

`getBalance` returns the prepaid balance only. Plan quotas and the free daily quota are not part of it, so a balance of 0 does not mean that solving fails. The client never checks the balance before a solve.

### Errors

API errors keep the message of the response, for example `Solvecha: ERROR_KEY_DENIED_ACCESS - The clientKey is missing or wrong.`

Contact: hello@marin.sh
