import type { ProxylessTaskParams } from "../_BaseTaskRequest";
import { MtCaptchaTaskBase } from "./_MtCaptchaTaskBase";

type MtCaptchaTaskProxyLessParams = ProxylessTaskParams<Omit<MtCaptchaTaskBase, "_endpoint" | "type">>;

/**
 * @classdesc MtCaptchaTaskProxyLess is using the server's built-in proxy.
 * @class
 * @extends {MtCaptchaTaskBase}
 * {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
 */
export class MtCaptchaTaskProxyLess extends MtCaptchaTaskBase {

  /**
   * Create MtCaptchaTaskBase
   * {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
   * @param {object} params -	MtCaptchaTaskBaseParams
   * @param {string} [params.websiteURL] -	The website url
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: sk=MTPublic-xxx public key)
   */
  constructor(params: MtCaptchaTaskProxyLessParams) {
    super(params, "MtCaptchaTaskProxyLess");
  }
}