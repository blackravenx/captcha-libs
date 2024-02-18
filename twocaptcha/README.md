![2Captcha logo](2captcha-logo.png){: width="50px"}
# 2captcha NodeJS captcha client - use 2captcha with ease 
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/maxshydev)
[![GitHub stars](https://img.shields.io/github/stars/blackravenx/captcha-libs.svg?style=social&label=Star)](https://github.com/blackravenx/captcha-libs)
Docs: https://2captcha.com/api-docs

## Installation
* [npm](https://www.npmjs.com/package/@captcha-libs/twocaptcha)
    ```$ npm i @captcha-libs/twocaptcha```
* pnpm
    ```$ pnpm i @captcha-libs/twocaptcha```
* yarn
    ```$ yarn add @captcha-libs/twocaptcha```

### Usage
```javascript
//import TwoCaptcha client and desired task 
import { TwoCaptcha, RecaptchaV2TaskProxyless } from "@captcha-libs/twocaptcha";

const twoCaptchaClient = new TwoCaptcha({
  clientKey: "<YOUR_CLIENT_KEY>",
  pollingInterval: 5000, //optional. Delay in milliseconds to fetch task result, default: 5000ms
  timeout: 120_000 //optional. Max time in milliseconds to wait for settled task result, default: 120000ms
});

//Pass captcha params to solve
const reCaptchaV2Request = new RecaptchaV2TaskProxyless({
  websiteKey: "6LfD3PIbAAAAAJs_eEHvoOl75_83eXSqpPSRFJ_u",
  websiteURL: "https://2captcha.com/demo/recaptcha-v2"
});

//returns solution or throws an exception
const reCaptchaV2Solution = await twoCaptchaClient.solve(reCaptchaV2Request);

const {
  taskId,
  solution, //returns generic captcha type specific solution
  solveCount,
  status,
  createTime,
  cost,
  ip,
  endTime
} = await twoCaptchaClient.solve(reCaptchaV2Solution);

const {
  gRecaptchaResponse, token
} = solution;

//If you want to submit solution as correct
await twoCaptchaClient.reportCorrect(taskId);
//...or incorrect
await twoCaptchaClient.reportIncorrect(taskId);

//to get balance
const balance = await twoCaptchaClient.getBalance()
```
### [Usage with proxies](https://2captcha.com/api-docs/proxy)
```javascript
const reCaptchaV2Request = new RecaptchaV2Task({
  websiteKey: "6LfD3PIbAAAAAJs_eEHvoOl75_83eXSqpPSRFJ_u",
  websiteURL: "https://2captcha.com/demo/recaptcha-v2",
  //your proxy credentials
  proxyAddress: "1.2.3.4", //required. string
  proxyPort: 8080, //required. number
  proxyType: "http", //required. 'http' or 'socks4' or 'socks5'
  proxyLogin: "user", //optional. string
  proxyPassword: "p4$$w0rd" //optional. string
});

```
### Features
* Supports all captcha types, solutions and methods from 2captcha docs (updated at Feb. 2024)
* TypeScript-first design
* Automatically waits for solution
* Fully tested task payloads

### Currently supported task payloads
What 'custom' does mean? Custom means that the parameters and solutions have been narrowed down from the official documentation from more general cases. However, you can still use classes strictly according to the official documentation.

1. Classification:
    * [ImageToTextTask](https://2captcha.com/api-docs/normal-captcha)
    * [TextCaptchaTask](https://2captcha.com/api-docs/text)
    * [RotateTask](https://2captcha.com/api-docs/rotate)
    * [CoordinatesTask](https://2captcha.com/api-docs/coordinates)
    * [GridTask](https://2captcha.com/api-docs/grid)
    * [DrawAroundTask](https://2captcha.com/api-docs/draw-around)
    * [BoundingBoxTask](https://2captcha.com/api-docs/bounding-box)
    * [AudioTask](https://2captcha.com/api-docs/audio)
2. Token:
    * [RecaptchaV2Task | RecaptchaV2TaskProxyLess](https://2captcha.com/api-docs/recaptcha-v2)
    * [RecaptchaV2EnterpriseTask | RecaptchaV2EnterpriseTaskProxyLess](https://2captcha.com/api-docs/recaptcha-v2-enterprise)
    * [RecaptchaV3TaskProxyless](https://2captcha.com/api-docs/recaptcha-v3)
    * [HCaptchaTask | HCaptchaTaskProxyLess](https://2captcha.com/api-docs/hcaptcha)
    * [FunCaptchaTask | FunCaptchaTaskProxyLess](https://2captcha.com/api-docs/arkoselabs-funcaptcha)
    * [GeeTestTask | GeeTestTaskProxyLess](https://2captcha.com/api-docs/geetest)
        * Custom - [GeeTestV3Task | GeeTestV3TaskProxyLess](https://2captcha.com/api-docs/geetest#request-examples-for-geetest-v3)
        * Custom - [GeeTestV4Task | GeeTestV4TaskProxyLess](https://2captcha.com/api-docs/geetest#request-examples-for-geetest-v4)
    * [TurnstileTask | TurnstileTaskProxyLess](https://2captcha.com/api-docs/cloudflare-turnstile)
    * [CapyTask | CapyTaskProxyLess](https://2captcha.com/api-docs/capy-puzzle-captcha)
    * [KeyCaptchaTask | KeyCaptchaTaskProxyLess](https://2captcha.com/api-docs/keycaptcha)
    * [LeminTask | LeminTaskProxyLess](https://2captcha.com/api-docs/lemin)
    * [AmazonTask | AmazonTaskProxyLess](https://2captcha.com/api-docs/amazon-aws-waf-captcha)
    * [AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess](https://2captcha.com/api-docs/anti-cyber-siara)
    * [MtCaptchaTask | MtCaptchaTaskProxyLess](https://2captcha.com/api-docs/mtcaptcha)
    * [CutCaptchaTask | CutCaptchaTaskProxyLess](https://2captcha.com/api-docs/cutcaptcha)
    * [DataDomeSliderTask](https://2captcha.com/api-docs/datadome-slider-captcha)
    * [FriendlyCaptchaTask | FriendlyCaptchaTaskProxyLess](https://2captcha.com/api-docs/friendly-captcha)

#### Looking for another captcha recognition service? Check our other libraries: 
* [CapSolver](https://www.npmjs.com/package/@captcha-libs/capsolver)
* [CapGuru](https://www.npmjs.com/package/@captcha-libs/capguru)