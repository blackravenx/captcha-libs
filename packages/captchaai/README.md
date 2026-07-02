# CaptchaAI NodeJS captcha client - use CaptchaAI with ease
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/maxshydev)
[![GitHub stars](https://img.shields.io/github/stars/blackravenx/captcha-libs.svg?style=social&label=Star)](https://github.com/blackravenx/captcha-libs)
Docs: https://docs.captchaai.com

## Installation
* [npm](https://www.npmjs.com/package/@captcha-libs/captchaai)
    ```$ npm i @captcha-libs/captchaai```
* pnpm
    ```$ pnpm i @captcha-libs/captchaai```
* yarn
    ```$ yarn add @captcha-libs/captchaai```

### Usage
```javascript
//import CaptchaAI client and desired task
import { CaptchaAI, RecaptchaV2TaskProxyless } from "@captcha-libs/captchaai";

const captchaAIClient = new CaptchaAI({
  clientKey: "<YOUR_CLIENT_KEY>",
  pollingInterval: 5000, //optional. Delay in milliseconds to fetch task result, default: 5000ms
  timeout: 120_000 //optional. Max time in milliseconds to wait for settled task result, default: 120000ms
});

//Pass captcha params to solve
const reCaptchaV2Request = new RecaptchaV2TaskProxyless({
  googlekey: "6LfD3PIbAAAAAJs_eEHvoOl75_83eXSqpPSRFJ_u",
  pageurl: "https://captchaai.com/demo/recaptcha-v2"
});

//returns the solved token or throws an exception
const reCaptchaV2Token = await captchaAIClient.solve(reCaptchaV2Request);

//to get balance
const balance = await captchaAIClient.getBalance()
```
### Usage with proxies
```javascript
const reCaptchaV2Request = new RecaptchaV2Task({
  googlekey: "6LfD3PIbAAAAAJs_eEHvoOl75_83eXSqpPSRFJ_u",
  pageurl: "https://captchaai.com/demo/recaptcha-v2",
  //your proxy credentials
  proxyAddress: "1.2.3.4", //required. string
  proxyPort: 8080, //required. number
  proxyType: "http", //required. 'http' or 'socks4' or 'socks5'
  proxyLogin: "user", //optional. string
  proxyPassword: "p4$$w0rd" //optional. string
});

```
### Features
* TypeScript-first design
* Automatically waits for solution
* Fully tested task payloads

### Currently supported task payloads

1. Classification:
    * [ImageToTextTask](https://docs.captchaai.com)
2. Token:
    * [RecaptchaV2Task | RecaptchaV2TaskProxyless](https://docs.captchaai.com)
    * [RecaptchaV2EnterpriseTask | RecaptchaV2EnterpriseTaskProxyless](https://docs.captchaai.com)
    * [RecaptchaV3TaskProxyless](https://docs.captchaai.com)
    * [TurnstileTask | TurnstileTaskProxyless](https://docs.captchaai.com)

> Note: CaptchaAI does not solve hCaptcha, so hCaptcha is intentionally not part of this client.

#### Looking for another captcha recognition service? Check our other libraries:
* [CapSolver](https://www.npmjs.com/package/@captcha-libs/capsolver)
* [CapGuru](https://www.npmjs.com/package/@captcha-libs/capguru)
* [2Captcha](https://www.npmjs.com/package/@captcha-libs/twocaptcha)
