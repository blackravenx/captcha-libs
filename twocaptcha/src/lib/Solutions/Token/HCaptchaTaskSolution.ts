/**
 * {@link https://2captcha.com/api-docs/hcaptcha}
 */
export interface HCaptchaTaskSolution {
  gRecaptchaResponse: string;
  respKey: string;
  token: string;
  userAgent: string;
}