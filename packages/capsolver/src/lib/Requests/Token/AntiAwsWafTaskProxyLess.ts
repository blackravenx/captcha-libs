import type { ProxylessTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { AntiAwsWafTaskBaseParams } from "./Base/_AntiAwsWafBase";

import { AntiAwsWafTaskBase } from "./Base/_AntiAwsWafBase";

type AntiAwsWafTaskProxyLessParams = ProxylessTaskParams<AntiAwsWafTaskBaseParams>;

/**
 * @classdesc AntiAwsWafTaskProxyLess this task type don't require your own proxies.
 * @class
 * @extends {AntiAwsWafTaskBase}
 * @see {@link https://docs.capsolver.com/guide/captcha/awsWaf.html}
 */
export class AntiAwsWafTaskProxyLess extends AntiAwsWafTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiAwsWafTaskProxyLess - Only used for correct method overloading intellisense
  */
  readonly _isAntiAwsWafTaskProxyLess: _IsTaskType["_isAntiAwsWafTaskProxyLess"] = true;

  /**
   * Create AntiAwsWafTask
   * @see {@link https://docs.capsolver.com/guide/captcha/awsWaf.html}
   * @param {Object} params - AntiAwsWafTaskProxyLessParams
   * @param {string=} [params.awsChallengeJS] - When the status code returned by the websiteURL page is 202, you only need to pass in awsChallengeJs;
   * @param {string=} [params.awsContext] - When the status code returned by the websiteURL page is 405, you need to pass in awsContext
   * @param {string=} [params.awsIv] - When the status code returned by the websiteURL page is 405, you need to pass in awsIv
   * @param {string=} [params.awsKey] - When the status code returned by the websiteURL page is 405, you need to pass in awsKey
   * @param {string} [params.websiteURL] - The URL of the page that returns the captcha info
   */
  constructor (params: AntiAwsWafTaskProxyLessParams) {
    super(params, "AntiAwsWafTaskProxyLess");
  }
}
