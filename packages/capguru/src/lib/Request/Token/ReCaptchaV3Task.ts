import type { ReCaptchaBaseParams } from "./_ReCaptchaBaseTask";

import { ReCaptchaBaseTask } from "./_ReCaptchaBaseTask";

export type ReCaptchaV3Params = Omit<ReCaptchaBaseParams, "version"> & { "min_score"?: number };

/**
 * @classdesc ReCaptchaV3 Solution
 * @class
 * @extends {ReCaptchaBaseTask}
 * @see {@link https://docs.cap.guru/en/apitoken/recap3.html}
 */
export class ReCaptchaV3Task extends ReCaptchaBaseTask implements ReCaptchaV3Params {

  /**
   * Create ReCaptchaV3Task
   * @see {@link https://docs.cap.guru/en/apitoken/recap3.html}
   * @param {ReCaptchaV3Params} params - params
   * @param {string} [params.googlekey] - The value of the parameter k or data-sitekey that you found in the page code. For example 6le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-
   * @param {string} [params.pageurl] - Full URL of the page where you are solving reCAPTCHA V3
   * @param {string} [params.min_score] - Required rating value (score). At the moment, it is difficult to get a token with a score higher than 0.1
   * @param {string} [params.cookies] - 	Your cookies that will be used by the employee to solve the captcha.
   * @param {string} [params.userAgent] - We substitute your userAgent for the employee.
   * @param {string} [params.proxy] - Format: login:password@151.142.23.32:3128
   * @param {string} [params.proxyType] - Your proxy type: : HTTP, HTTPS, SOCKS4, SOCKS5.
   */
  constructor (params: ReCaptchaV3Params) {
    const { min_score, ..._params } = params;

    super({
      ..._params,
      "version": "v3"
    });

    this.min_score = min_score;
  }

  /**
   * @type {number} min_score - Required rating value (score). At the moment, it is difficult to get a token with a score higher than 0.1
   */
  min_score?: number;
}
