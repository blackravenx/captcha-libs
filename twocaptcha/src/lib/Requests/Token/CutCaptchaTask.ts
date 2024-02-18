import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { CutCaptchaTaskBaseParams } from "./Base/_CutCaptchaTask";
import { CutCaptchaTaskBase } from "./Base/_CutCaptchaTask";

type CutCaptchaTaskParams = ProxyRequiredTaskParams<CutCaptchaTaskBaseParams>;

/**
 * Token-based method to bypass Friendly Captcha.
 * @extends {CutCaptchaTaskBase}
 * {@link https://2captcha.com/api-docs/cutcaptcha}
 */
export class CutCaptchaTask extends CutCaptchaTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isCutCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isCutCaptchaTask = true;

  /**
  * Create CutCaptchaTask
  * {@link https://2captcha.com/api-docs/cutcaptcha}
  * @param {Object} params - CutCaptchaTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.miseryKey] - The value of CUTCAPTCHA_MISERY_KEY variable defined on page.
  * @param {string} [params.apiKey] - The value of data-apikey attribute of iframe's body. Also the name of javascript file included on the page
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: CutCaptchaTaskParams) {
    super(params, "CutCaptchaTask");
  }
}