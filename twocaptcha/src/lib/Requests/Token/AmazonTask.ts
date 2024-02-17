import {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import {
  AmazonTaskBase, AmazonTaskBaseParams
} from "./_AmazonTaskBase";

type AmazonTaskParams = ProxyRequiredTaskParams<AmazonTaskBaseParams>;

/**
 * Token-based method for automated solving of Amazon AWS CAPTCHA.
 * @extends {AmazonTaskBase}
 * {@link https://2captcha.com/api-docs/amazon-aws-waf-captcha}
 */
export class AmazonTask extends AmazonTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAmazonTask - Only used for correct method overloading intellisense
  */
  readonly _isAmazonTask = true;

  /**
  * Create AmazonTask
  * {@link https://2captcha.com/api-docs/amazon-aws-waf-captcha}
  * @param {Object} params - AmazonTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Value of key parameter you found on the page
  * @param {string} [params.iv] - Value of iv parameter you found on the
  * @param {string} [params.context] - Value of context parameter you found on the page
  * @param {string} [params.challengeScript] - The source URL of challenge.js script on the page
  * @param {string} [params.captchaScript] - The source URL of captcha.js script on the page
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: AmazonTaskParams) {
    super(params, "AmazonTask");
  }
}