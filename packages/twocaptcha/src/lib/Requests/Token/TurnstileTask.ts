import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { TurnstileTaskBaseParams } from "./Base/_TurnstileTaskBase";

import { TurnstileTaskBase } from "./Base/_TurnstileTaskBase";

type TurnstileTaskParams = ProxyRequiredTaskParams<TurnstileTaskBaseParams>;

/**
 * Token-based method to bypass Cloudflare Turnstile. Both the standalone captcha and challenge mode are supported.
 * @extends {TurnstileTaskBase}
 * @see {@link https://2captcha.com/api-docs/cloudflare-turnstile}
 */
export class TurnstileTask extends TurnstileTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isTurnstileTask - Only used for correct method overloading intellisense
  */
  readonly _isTurnstileTask: _IsTaskType["_isTurnstileTask"] = true;

  /**
  * Create TurnstileTask
  * @see {@link https://2captcha.com/api-docs/cloudflare-turnstile}
  * @param {Object} params - TurnstileTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Turnstile sitekey. Can be found inside data-sitekey property of the Turnstile div element
  * @param {string} [params.actions] - Required for Cloudflare Challenge pages. The value of action parameter of turnstile.render call
  * @param {string} [params.data] - Required for Cloudflare Challenge pages. The value of cData parameter of turnstile.render call
  * @param {string} [params.pagedata] - Required for Cloudflare Challenge pages. The value of chlPageData parameter of turnstile.render call
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor (params: TurnstileTaskParams) {
    super(params, "TurnstileTask");
  }
}
