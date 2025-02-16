import type { ProxyRequiredTaskParams, _IsTaskType } from "../_BaseTaskRequest";

import type { AntiAwsWafTaskBaseParams } from "./Base/_AntiAwsWafBase";

import { AntiAwsWafTaskBase } from "./Base/_AntiAwsWafBase";

type AntiAwsWafTaskParams = ProxyRequiredTaskParams<AntiAwsWafTaskBaseParams>;

/**
 * @classdesc AntiAwsWafTask this task type require your own proxies.
 * @class
 * @extends {AntiAwsWafTaskBase}
 * @see {@link https://docs.capsolver.com/guide/captcha/awsWaf.html}
 */
export class AntiAwsWafTask extends AntiAwsWafTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isAntiAwsWafTask - Only used for correct method overloading intellisense
  */
  readonly _isAntiAwsWafTask: _IsTaskType["_isAntiAwsWafTask"] = true;

  /**
   * Create AntiAwsWafTask - this task type require your own proxies.
   * @see {@link https://docs.capsolver.com/guide/captcha/awsWaf.html}
   * @param {Object} params - AntiAwsWafTaskParams
   * @param {string=} [params.awsChallengeJS] - When the status code returned by the websiteURL page is 202, you only need to pass in awsChallengeJs;
   * @param {string=} [params.awsContext] - When the status code returned by the websiteURL page is 405, you need to pass in awsContext
   * @param {string=} [params.awsIv] - When the status code returned by the websiteURL page is 405, you need to pass in awsIv
   * @param {string=} [params.awsKey] - When the status code returned by the websiteURL page is 405, you need to pass in awsKey
   * @param {string} [params.proxy] - proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {string} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   * @param {string} [params.websiteURL] - The URL of the page that returns the captcha info
   */
  constructor (params: AntiAwsWafTaskParams) {
    super(params, "AntiAwsWafTask");
  }
}
