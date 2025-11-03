/**
 * @see {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html#example-response-1}
 */
export interface ReCaptchaV3TaskSolution {
  "userAgent": string;
  "secChUa": string;
  "createTime": number;
  "gRecaptchaResponse": string;
  "recaptcha-ca-t": string;
  "recaptcha-ca-e": string;
}
