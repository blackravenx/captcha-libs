
import type { ReCaptchaBaseParams } from "./_ReCaptchaBaseTask";
import { ReCaptchaBaseTask } from "./_ReCaptchaBaseTask";

export type ReCaptchaV2Params = Omit<ReCaptchaBaseParams, "version">;

/**
 * @classdesc ReCaptchaV2 & ReCaptchaV2 Invisible Solution
 * @class
 * @extends {ReCaptchaBaseTask}
 * {@link https://docs.cap.guru/en/apitoken/recap2.html}
 */
export class ReCaptchaV2Task extends ReCaptchaBaseTask implements ReCaptchaV2Params {

  /**
   * Create ReCaptchaV2Task
   * {@link https://docs.cap.guru/en/apitoken/recap2.html}
   * @param {ReCaptchaV2Params} params - params
   * @param {string} [params.googlekey] - The value of the parameter k or data-sitekey that you found in the page code. For example 6le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-
   * @param {string} [params.pageurl] - Full URL of the page where you are solving reCAPTCHA V2
   * @param {string} [params.data-s] - The value of the data-s parameter found on the page. Relevant for Google search
   * @param {string} [params.cookies] - 	Your cookies that will be used by the employee to solve the captcha.
   * @param {string} [params.userAgent] - We substitute your userAgent for the employee.
   * @param {string} [params.proxy] - Format: login:password@151.142.23.32:3128
   * @param {string} [params.proxyType] - Your proxy type: : HTTP, HTTPS, SOCKS4, SOCKS5.
   */
  constructor(params: ReCaptchaV2Params) {
    super({
      ...params,
      version: "v2"
    });
  }
}
