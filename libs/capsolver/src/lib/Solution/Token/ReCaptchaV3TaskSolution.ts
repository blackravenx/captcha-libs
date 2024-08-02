/**
 * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html#example-response-1}
 */
export interface ReCaptchaV3TaskSolution {
  expireTime: number;
  gRecaptchaResponse: string;
  userAgent: string;
}