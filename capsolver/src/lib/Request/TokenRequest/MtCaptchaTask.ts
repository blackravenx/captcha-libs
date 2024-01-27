import type { ProxyRequiredTaskParams } from "../_BaseTaskRequest";
import { MtCaptchaTaskBase } from "./_MtCaptchaTaskBase";

type MtCaptchaTaskParams = ProxyRequiredTaskParams<Omit<MtCaptchaTaskBase, "_endpoint" | "type">>;

/**
 * @classdesc MtCaptchaTask this task type require your own proxies
 * @class
 * @extends {MtCaptchaTaskBase}
 * {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
 */
export class MtCaptchaTask extends MtCaptchaTaskBase {

  /**
   * Create MtCaptchaTaskBase
   * {@link https://docs.capsolver.com/guide/captcha/MtCaptcha.html}
   * @param {object} params -	MtCaptchaTaskBaseParams
   * @param {string} [params.proxy] -	proxy
   * @param {string} [params.websiteURL] -	The website url
   * @param {string} [params.websiteKey] - The domain public key, rarely updated. (Ex: sk=MTPublic-xxx public key)
   */
  constructor(params: MtCaptchaTaskParams) {
    super(params, "MtCaptchaTask");
  }
}