# Capsolver NodeJS captcha client - use CapSolver with ease 
<a alt="CapSolver logo" href="https://docs.capsolver.com" target="_blank" rel="noreferrer"><img src="https://docs.capsolver.com/logo-1.png" width="45"></a>

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/maxshydev)
[![GitHub stars](https://img.shields.io/github/stars/blackravenx/captcha-libs.svg?style=social&label=Star)](https://github.com/blackravenx/captcha-libs)
Docs: https://docs.capsolver.com

## Installation
Via [npm](https://www.npmjs.com/package/@captcha-libs/capsolver)
    ```$ npm i @captcha-libs/capsolver```
pnpm
    ```$ pnpm i @captcha-libs/capsolver```
yarn
    ```$ yarn add @captcha-libs/capsolver```

### Usage
```javascript
//import CapSolver client and desired task 
import { CapSolver, ReCaptchaV3EnterpriseTaskProxyLess } from "@captcha-libs/capsolver";

const capsolverClient = new CapSolver({
  clientKey: "<YOUR_CLIENT_KEY>",
  pollingInterval: 5000, // optional. Delay in milliseconds to fetch task result, default: 5000ms
  timeout: 120_000 // optional. Max time in milliseconds to wait for settled task result, default: 120000ms
});

// Pass captcha params to solve
const reCaptchaV3Request = new ReCaptchaV3EnterpriseTaskProxyLess({
  websiteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
  websiteURL: "https://www.google.com/recaptcha/api2/demo"
});

// returns solution or throws an exception
const reCaptchaV3Solution = await capsolverClient.solve(reCaptchaV3Request);

const {
  solution, //returns generic captcha type specific solution
  errorId,
  errorCode,
  errorDescription,
  status
} = reCaptchaV3Solution;

const {
  gRecaptchaResponse, userAgent, expireTime
} = solution;

//if you want to submit feedback
const feedback = await capsolverClient.feedbackTask({
   taskId,
   invalid: false, //is captcha solved successfully? required.
   message: "success", //optional
   code: 1, //optional
});

//to get balance
const balance = await capsolverClient.getBalance()
```
### [Usage with proxies](https://docs.capsolver.com/guide/api-how-to-use-proxy.html)
```javascript
const reCaptchaV3Request = new ReCaptchaV3EnterpriseTask({
  websiteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
  websiteURL: "https://www.google.com/recaptcha/api2/demo",
  
  //You can send the proxy information with one of these proxy format, please read carefully
  
  //pass proxy connection string
  proxy: "socks5:192.191.100.10:4780:user:pwd",
  //or
  proxy: "198.199.100.10:4780:user:pwd",

  //or use object format
  proxyAddress: "198.199.100.10",
  proxyType: "https", // socks5 | http | https
  proxyLogin: "user",
  proxyPassword: "pass",
  proxyPort: 3949,
});

```
### Features
* Supports all captcha types, solutions and methods from CapSolver docs (updated at May 2024)
* TypeScript-first design
* Automatically waits for solution
* Fully tested task payloads
* Only one dependency (ofetch)

### Currently supported task payloads
What 'custom' does mean? Custom means that the parameters and solutions have been narrowed down from the official documentation from more general cases. However, you can still use classes strictly according to the official documentation.

1. Classification
    * [ImageToTextTask](https://docs.capsolver.com/guide/recognition/ImageToTextTask.html)
    * [HCaptchaClassification](https://docs.capsolver.com/guide/recognition/HCaptchaClassification.html)
    * [FunCaptchaClassification](https://docs.capsolver.com/guide/recognition/FunCaptchaClassification.html)
    * [ReCaptchaClassification](https://docs.capsolver.com/guide/recognition/ReCaptchaClassification.html)
    * [AwsWafClassification](https://docs.capsolver.com/guide/recognition/AwsWafClassification.html)
2. Token
    * [HCaptchaTask | HCaptchaTaskProxyLess](https://docs.capsolver.com/guide/captcha/HCaptcha.html)
    * [FunCaptchaTaskProxyLess](https://docs.capsolver.com/guide/captcha/FunCaptcha.html)
    * [GeeTestTask | GeeTestTaskProxyLess](https://docs.capsolver.com/guide/captcha/Geetest.html)    
        * Custom - [GeeTestV3Task | GeeTestV3TaskProxyLess](https://docs.capsolver.com/guide/captcha/Geetest.html)
        * Custom - [GeeTestV4Task | GeeTestV4TaskProxyLess](https://docs.capsolver.com/guide/captcha/Geetest.html)
    * [ReCaptchaV2Task | ReCaptchaV2EnterpriseTask | ReCaptchaV2TaskProxyLess | ReCaptchaV2EnterpriseTaskProxyLess](https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html)
    * [ReCaptchaV3Task | ReCaptchaV3EnterpriseTask | ReCaptchaV3TaskProxyLess | ReCaptchaV3EnterpriseTaskProxyLess | ~~DEPRECATED (ReCaptchaV3M1TaskProxyLess)~~](https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html)
    * [DatadomeSliderTask](https://docs.capsolver.com/guide/antibots/datadome.html)
    * [AntiAwsWafTask | AntiAwsWafTaskProxyLess](https://docs.capsolver.com/guide/captcha/awsWaf.html)
    * DEPRECATED ~~[AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess](https://docs.capsolver.com/guide/captcha/CyberSiara.html)~~
    * [AntiImpervaTask | AntiImpervaTaskProxyLess](https://docs.capsolver.com/guide/antibots/imperva.html)
    * [AntiCloudflareTurnstileTask](https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html)
    * [AntiCloudflareChallengeTask](https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html)
    * DEPRECATED. ~~[AntiAkamaiBMPTask](https://docs.capsolver.com/guide/antibots/akamaibmp.html)~~
        * DEPRECATED. ~~Custom - [AntiAkamaiPowTask](https://docs.capsolver.com/guide/antibots/akamaibmp.html)~~
        * DEPRECATED. ~~Custom - [AntiAkamaiSensorTask](https://docs.capsolver.com/guide/antibots/akamaibmp.html)~~
    * DEPRECATED ~~[AntiAkamaiWebTask](https://docs.capsolver.com/guide/antibots/akamaiweb.html)~~
    
 ~~DEPRECATED~~ = task type removed from service support, but you can still try to send task