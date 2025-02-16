# Capsolver NodeJS captcha client - use CapSolver with ease  
<a alt="CapSolver logo" href="https://docs.capsolver.com" target="_blank" rel="noreferrer"><img src="https://docs.capsolver.com/logo-1.png" width="45"></a>  

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/maxshydev)  
[![GitHub stars](https://img.shields.io/github/stars/blackravenx/captcha-libs.svg?style=social&label=Star)](https://github.com/blackravenx/captcha-libs)  
Docs: [https://docs.capsolver.com](https://docs.capsolver.com)  

## Installation  
```npm i @captcha-libs/capsolver```

### Usage  
```javascript
import { CapSolver, ReCaptchaV3EnterpriseTaskProxyLess } from "@captcha-libs/capsolver";

const capsolverClient = new CapSolver({
  clientKey: "<YOUR_CLIENT_KEY>",
  pollingInterval: 5000, // optional, default: 5000ms
  timeout: 120_000 // optional, default: 120000ms
});

const reCaptchaV3Request = new ReCaptchaV3EnterpriseTaskProxyLess({
  websiteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
  websiteURL: "https://www.google.com/recaptcha/api2/demo"
});

const reCaptchaV3Solution = await capsolverClient.solve(reCaptchaV3Request);

const {
  solution, errorId, errorCode, errorDescription, status
} = reCaptchaV3Solution;

const { gRecaptchaResponse, userAgent, expireTime } = solution;

const feedback = await capsolverClient.feedbackTask({
   taskId,
   invalid: false,
   message: "success",
   code: 1,
});

const balance = await capsolverClient.getBalance();
```  

### Features  
- Supports all captcha types, solutions, and methods from CapSolver docs (updated Feb 2025)  
- TypeScript-first design  
- Automatically waits for solution  
- Fully tested task payloads

### Currently supported task payloads  

#### Classification  
- [ImageToTextTask](https://docs.capsolver.com/guide/recognition/ImageToTextTask.html)  
- [ReCaptchaClassification](https://docs.capsolver.com/guide/recognition/ReCaptchaClassification.html)  
- [AwsWafClassification](https://docs.capsolver.com/guide/recognition/AwsWafClassification.html)  
- [VisionEngine](https://docs.capsolver.com/guide/recognition/VisionEngine.html)  
- ~~DEPRECATED~~ [HCaptchaClassification](https://docs.capsolver.com/guide/recognition/HCaptchaClassification.html)  
- ~~DEPRECATED~~ [FunCaptchaClassification](https://docs.capsolver.com/guide/recognition/FunCaptchaClassification.html)  

#### Token  
- [ReCaptchaV2Task | ReCaptchaV2EnterpriseTask | ReCaptchaV2TaskProxyLess | ReCaptchaV2EnterpriseTaskProxyLess](https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html)  
- [ReCaptchaV3Task | ReCaptchaV3EnterpriseTask | ReCaptchaV3TaskProxyLess | ReCaptchaV3EnterpriseTaskProxyLess](https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html)  
- [DatadomeSliderTask](https://docs.capsolver.com/guide/antibots/datadome.html)  
- [AntiAwsWafTask | AntiAwsWafTaskProxyLess](https://docs.capsolver.com/guide/captcha/awsWaf.html)  
- [AntiCloudflareTurnstileTask](https://docs.capsolver.com/en/guide/captcha/cloudflare_turnstile/)  
- ~~DEPRECATED~~ [HCaptchaTask | HCaptchaTaskProxyLess](https://docs.capsolver.com/guide/captcha/HCaptcha.html)  
- ~~DEPRECATED~~ [FunCaptchaTaskProxyLess](https://docs.capsolver.com/guide/captcha/FunCaptcha.html)  
- ~~DEPRECATED~~ [GeeTestTask | GeeTestTaskProxyLess](https://docs.capsolver.com/guide/captcha/Geetest.html)  
- ~~DEPRECATED~~ [AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess](https://docs.capsolver.com/guide/captcha/CyberSiara.html)  
- ~~DEPRECATED~~ [AntiImpervaTask | AntiImpervaTaskProxyLess](https://docs.capsolver.com/guide/antibots/imperva.html)  
- ~~DEPRECATED~~ [AntiCloudflareChallengeTask](https://docs.capsolver.com/guide/antibots/cloudflare_challenge.html)  
- ~~DEPRECATED~~ [AntiAkamaiBMPTask](https://docs.capsolver.com/guide/antibots/akamaibmp.html)  
- ~~DEPRECATED~~ [AntiAkamaiWebTask](https://docs.capsolver.com/guide/antibots/akamaiweb.html)  

**~~DEPRECATED~~** = Task type removed from service support, but you can still try to send the task.  
