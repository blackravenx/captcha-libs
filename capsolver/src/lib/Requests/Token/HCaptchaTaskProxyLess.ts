
import type {
  ProxylessTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import { HCaptchaTaskBase } from "./_HCaptchaTaskBase";

type HCaptchaTaskProxyLessParams = ProxylessTaskParams<Omit<HCaptchaTaskBase, "_endpoint" | "type">>;

/**
 * @classdesc HCaptchaTaskProxyLess this task type require your own proxies
 * @class
 * {@link https://docs.capsolver.com/guide/captcha/HCaptcha.html}
 * @extends {BaseTask}
 * @implements {HCaptchaTaskProxyLessParams}
 */
export class HCaptchaTaskProxyLess extends HCaptchaTaskBase implements _IsTaskType {

  /**
 * @type {boolean} _isHCaptchaTaskProxyLess - Only used for correct method overloading intellisense
 */
  readonly _isHCaptchaTaskProxyLess = true;

  /**
   * Create HCaptchaTaskProxyLess this task type require your own proxies
   * {@link https://docs.capsolver.com/guide/captcha/HCaptcha.html}
   * @param {Object} params - HCaptchaTaskProxyLessParams
   * @param {Object=} params.enterprisePayload - Enterprise Payload
   * @param {string} params.websiteURL - Web address of the website using recaptcha, generally it's fixed value. (Ex: https://google.com)
   * @param {string} params.websiteKey - The domain public key, rarely updated. (Ex: b989d9e8-0d14-41sda0-870f-97b5283ba67d)
   * @param {boolean=} params.isInvisible - if recaptcha don't have pageAction, reload request body content flag have "fi"
   * @param {string} [params.userAgent] - Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".
   */
  constructor(params: HCaptchaTaskProxyLessParams) {
    super(params, "HCaptchaTaskProxyLess");
  }
}