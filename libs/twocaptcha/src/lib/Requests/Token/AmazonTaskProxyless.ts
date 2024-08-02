import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { AmazonTaskBaseParams } from "./Base/_AmazonTaskBase";
import { AmazonTaskBase } from "./Base/_AmazonTaskBase";

type AmazonTaskProxylessParams = ProxylessTaskParams<AmazonTaskBaseParams>;

/**
 * Token-based method for automated solving of Amazon AWS CAPTCHA.
 * @extends {AmazonTaskBase}
 * {@link https://2captcha.com/api-docs/amazon-aws-waf-captcha}
 */
export class AmazonTaskProxyless extends AmazonTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isKeyCaptchaTask - Only used for correct method overloading intellisense
  */
  readonly _isAmazonTaskProxyless: _IsTaskType["_isAmazonTaskProxyless"] = true;

  /**
  * Create AmazonTaskProxyless
  * {@link https://2captcha.com/api-docs/amazon-aws-waf-captcha}
  * @param {Object} params - AmazonTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Value of key parameter you found on the page
  * @param {string} [params.iv] - Value of iv parameter you found on the
  * @param {string} [params.context] - Value of context parameter you found on the page
  * @param {string} [params.challengeScript] - The source URL of challenge.js script on the page
  * @param {string} [params.captchaScript] - The source URL of captcha.js script on the page
  */
  constructor(params: AmazonTaskProxylessParams) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    super(params, "AmazonTaskProxyless");
  }
}
