import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { TencentTaskBaseParams } from "./Base/_TencentTaskBase";

import { TencentTaskBase } from "./Base/_TencentTaskBase";

type TencentTaskParams = ProxyRequiredTaskParams<TencentTaskBaseParams>;

/**
 * Token-based method to bypass Tencent captcha.
 * @extends {TencentTaskBase}
 * @see {@link https://2captcha.com/api-docs/tencent}
 */
export class TencentTask extends TencentTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isTencentTask - Only used for correct method overloading intellisense
  */
  readonly _isTencentTask: _IsTaskType["_isTencentTask"] = true;

  /**
  * Create TencentTask
  * @see {@link https://2captcha.com/api-docs/tencent}
  * @param {Object} params - TencentTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.appId] - The TencentTask sitekey value found in the page code.
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor (params: TencentTaskParams) {
    super(params, "TencentTask");
  }
}
