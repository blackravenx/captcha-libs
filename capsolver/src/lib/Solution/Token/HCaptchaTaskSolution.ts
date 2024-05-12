/**
 * {@link https://docs.capsolver.com/guide/captcha/HCaptcha.html#example-response-1}
 */
export interface HCaptchaTaskSolution {
  captchaKey: string;
  expireTime: number;
  gRecaptchaResponse: string;
  timestamp: number;
  userAgent: string;
}