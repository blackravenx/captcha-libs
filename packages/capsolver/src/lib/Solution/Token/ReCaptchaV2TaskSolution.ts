/**
 * @see {@link https://docs.capsolver.com/en/guide/captcha/ReCaptchaV2#example-response-1}
 */
export interface ReCaptchaV2TaskSolution {
  "userAgent": string;
  "secChUa": string;
  "createTime": number;
  "gRecaptchaResponse": string;
  "recaptcha-ca-t": string;
  "recaptcha-ca-e": string;
}
