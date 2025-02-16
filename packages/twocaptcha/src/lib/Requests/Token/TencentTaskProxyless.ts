import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { TencentTaskBaseParams } from "./Base/_TencentTaskBase";

import { TencentTaskBase } from "./Base/_TencentTaskBase";

type TencentTaskProxylessParams = ProxylessTaskParams<TencentTaskBaseParams>;

/**
 * Token-based method to bypass Tencent captcha.
 * @extends {CapyTaskBase}
 * @see {@link https://2captcha.com/api-docs/tencent}
 */
export class TencentTaskProxyless extends TencentTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isTencentTaskProxyless - Only used for correct method overloading intellisense
  */
  readonly _isTencentTaskProxyless: _IsTaskType["_isTencentTaskProxyless"] = true;

  /**
  * Create TencentTaskProxyless
  * @see {@link https://2captcha.com/api-docs/tencent}
  * @param {Object} params - TencentTaskProxylessParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.appId] - The TencentTask sitekey value found in the page code.
  */
  constructor (params: TencentTaskProxylessParams) {
    super(params, "TencentTaskProxyless");
  }
}
