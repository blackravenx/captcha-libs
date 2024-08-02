/**
 * {@link https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html#example-response-1}
 */
export interface ReCaptchaV2TaskSolution {
  expireTime: number;
  gRecaptchaResponse: string;
  userAgent: string;
}