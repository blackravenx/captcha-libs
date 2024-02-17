# Capsolver NodeJS captcha client - use CapSolver with ease 
<a alt="CapSolver logo" href="https://docs.capsolver.com" target="_blank" rel="noreferrer"><img src="https://docs.capsolver.com/logo-1.png" width="45"></a>

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/maxshydev)
[![GitHub stars](https://img.shields.io/github/stars/blackravenx/captcha-libs.svg?style=social&label=Star)](https://github.com/blackravenx/captcha-libs)
Docs: https://docs.capsolver.com

## Installation
Via [npm](https://www.npmjs.com/package/@captcha-libs/capsolver)
    ```npm i @captcha-libs/capsolver```

Usage
```javascript
import { CapSolver, ReCaptchaV3EnterpriseTask } from "@captcha-libs/capsolver";

const capsolverClient = new CapSolver({
  clientKey: "<YOUR_CLIENT_KEY>",
  pollingInterval: 5000, //optional. Delay in milliseconds to fetch task result, default: 5000ms
  timeout: 120_000 //optional. Max time in milliseconds to wait for settled task result, default: 120000ms
});
const reCaptchaV3Request = new ReCaptchaV3EnterpriseTask({
    proxy: "http:ip:port:user:pass",
    websiteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
    websiteURL: "https://www.google.com/recaptcha/api2/demo"
}); 

const reCaptchaV3Solution = await capsolverClient.solve(reCaptchaV3Request);

const {
   solution: { expireTime, gRecaptchaResponse, userAgent, taskId }
} = reCaptchaV3Solution;

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
    * [ReCaptchaV3Task | ReCaptchaV3EnterpriseTask | ReCaptchaV3TaskProxyLess | ReCaptchaV3EnterpriseTaskProxyLess | ReCaptchaV3M1TaskProxyLess](https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html)
    * [DatadomeSliderTask](https://docs.capsolver.com/guide/antibots/datadome.html)
    * [AntiAwsWafTask | AntiAwsWafTaskProxyLess](https://docs.capsolver.com/guide/captcha/awsWaf.html)
    * [AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess](https://docs.capsolver.com/guide/captcha/CyberSiara.html)
    * [AntiImpervaTask | AntiImpervaTaskProxyLess](https://docs.capsolver.com/guide/antibots/imperva.html)
    * [AntiCloudflareTurnstileTask](https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html)
    * [AntiCloudflareChallengeTask](https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html)
    * [AntiAkamaiBMPTask](https://docs.capsolver.com/guide/antibots/akamaibmp.html)
        * Custom - [AntiAkamaiPowTask](https://docs.capsolver.com/guide/antibots/akamaibmp.html)
        * Custom - [AntiAkamaiSensorTask](https://docs.capsolver.com/guide/antibots/akamaibmp.html)
    * [AntiAkamaiWebTask](https://docs.capsolver.com/guide/antibots/akamaiweb.html)
    



