import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { TurnstileTaskBaseParams } from "./Base/_TurnstileTaskBase";

import { TurnstileTaskBase } from "./Base/_TurnstileTaskBase";

type TurnstileTaskProxylessParams = ProxylessTaskParams<TurnstileTaskBaseParams>;

/**
 * Token-based method to bypass Cloudflare Turnstile. Both the standalone captcha and challenge mode are supported.
 * @extends {TurnstileTaskBase}
 * @see {@link https://2captcha.com/api-docs/cloudflare-turnstile}
 */
export class TurnstileTaskProxyless extends TurnstileTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isTurnstileTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isTurnstileTaskProxyless: _IsTaskType["_isTurnstileTaskProxyless"] = true;

  /**
  * Create TurnstileTaskProxyless
  * @see {@link https://2captcha.com/api-docs/cloudflare-turnstile}
  * @param {Object} params - TurnstileTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.websiteKey] - Turnstile sitekey. Can be found inside data-sitekey property of the Turnstile div element
  * @param {string} [params.actions] - Required for Cloudflare Challenge pages. The value of action parameter of turnstile.render call
  * @param {string} [params.data] - Required for Cloudflare Challenge pages. The value of cData parameter of turnstile.render call
  * @param {string} [params.pagedata] - Required for Cloudflare Challenge pages. The value of chlPageData parameter of turnstile.render call
  */
  constructor (params: TurnstileTaskProxylessParams) {
    super(params, "TurnstileTaskProxyless");
  }
}
