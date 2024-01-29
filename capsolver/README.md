<a alt="CapSolver logo" href="https://docs.capsolver.com" target="_blank" rel="noreferrer"><img src="https://docs.capsolver.com/logo-1.png" width="45"></a>

# Capsolver NodeJS captcha client - use CapSolver with ease 
Docs: https://docs.capsolver.com

## Installation
Via [npm](https://www.npmjs.com/package/@captcha-libs/capsolver)
    ```npm i @captcha-libs/capsolver```

Usage
```javascript
import { CapSolver, ReCaptchaV2Task } from "@captcha-libs/capsolver";

const capsolverClient = new CapSolver({ clientKey: "<YOUR_CLIENT_KEY>" });

const reCaptchaV3Request = new ReCaptchaV3EnterpriseTask({
    proxy: "http:ip:port:user:pass",
    websiteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
    websiteURL: "https://www.google.com/recaptcha/api2/demo"
}); 

const reCaptchaV3Solution = await capsolverClient.solve(reCaptchaV3Request);

const {
   solution: { expireTime, gRecaptchaResponse, userAgent }
} = reCaptchaV3Solution;

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
    



