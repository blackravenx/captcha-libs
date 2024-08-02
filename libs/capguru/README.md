# CapGuru NodeJS captcha client - use CapGuru with ease 
![CapGuru logo](capguru-logo.png)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/maxshydev)
[![GitHub stars](https://img.shields.io/github/stars/blackravenx/captcha-libs.svg?style=social&label=Star)](https://github.com/blackravenx/captcha-libs)
Docs: https://docs.cap.guru/en/
## Register via this [link](https://cap.guru/en/regen/?ref=140559)
## Installation
Via [npm](https://www.npmjs.com/package/@captcha-libs/capguru)
    ```npm i @captcha-libs/capguru```

Usage
```javascript
import { CapGuru, GenericPuzzleTask } from "@captcha-libs/capguru";

const capguruClient = new CapGuru({
  baseUrl: "https://api3.cap.guru/", // base url for capguru, default = "https://api3.cap.guru/"
  clientKey: "<YOUR_CLIENT_KEY>",
  pollingInterval: 5000, // optional. Delay in milliseconds to fetch task result, default: 5000ms
  timeout: 120_000 // optional. Max time in milliseconds to wait for settled task result, default: 120000ms,
});

const puzzleRequest = new GenericPuzzleTask({ body: "puzzle-image-in-base64" });

const puzzleSolution = await capguruClient.solve(puzzleRequest);

const {
  request, // as-is solution from api, example: "coordinates:x=247,y=0"
  solution // parsed solution added by this library, example: { x: 247, y: 0}
} = puzzleSolution;

//to get balance
const balance = await capguruClient.getBalance()
```

### Parsed solution examples
* #### Single coordinate
```
"coordinate:x=44,y=32" -> { x: 44, y: 32}
```
* #### Multiple coordinates
```
"coordinates:x=99,y=196;x=197,y=148;x=144,y=47" -> [{x:99,y:196},{x:197,y:148},{x:144,y:47}]
```
* #### Images 
```
"5,8,4,1" -> [5, 8, 4, 1]
```
* ### Token (parsed as-is)
```
"token" -> "token"
```
### Currently supported task payloads

1. Classification
    * [AmazonCarPathTask](https://docs.cap.guru/en/apiclick/aws.html)
    * [AmazonPuzzleTask](https://docs.cap.guru/en/apiclick/aws.html)
    * [BinanceGridTask](https://docs.cap.guru/en/apiclick/binance.html#examples-2)
    * [BinancePuzzleTask](https://docs.cap.guru/en/apiclick/binance.html#examples)
    * [BuxMoneyCoordinatesTask](https://docs.cap.guru/en/apiclick/other/bux.html)
    * [FunCaptchaGridTask](https://docs.cap.guru/en/apiclick/funcap.html)
    * [GeeTestPuzzleTask](https://docs.cap.guru/en/apiclick/geetest.html#examples)
    * [GenericPuzzleTask - task for any puzzle](https://docs.cap.guru/en/api/slider.html)
    * [HCaptchaCoordinatesTask](docs.cap.guru/en/apiclick/hcap.html)
    * [HCaptchaGridTask](docs.cap.guru/en/apiclick/hcap.html)
    * [ImageToTextTask](https://docs.cap.guru/en/apiclick/text.html)
    * [LinkvertiseCoordinatesTask](https://docs.cap.guru/en/apiclick/other/linkvertise.html)
    * [ReCaptchaGridTask](https://docs.cap.guru/en/apiclick/recap.html)
    * [SeoFastCoordinatesTask](https://docs.cap.guru/en/apiclick/other/seofast.html)
    * [TikTokABCTask](https://docs.cap.guru/en/apiclick/tiktok.html#versions)
    * [TikTokKolesoTask](https://docs.cap.guru/en/apiclick/tiktok.html#versions)
    * [TikTokPuzzleTask](https://docs.cap.guru/en/apiclick/tiktok.html#versions)
    * [WorldCashCoordinatesTask](https://docs.cap.guru/en/apiclick/other/worldcash.html)
2. Token
    * [HCaptchaTask](https://docs.cap.guru/en/apitoken/hcap.html)
    * [ReCaptchaV2Task](https://docs.cap.guru/en/apitoken/recap2.html)
    * [ReCaptchaV3Task](https://docs.cap.guru/en/apitoken/recap3.html)
    * [TurnstileTask](https://docs.cap.guru/en/apitoken/turnstile.html)
    