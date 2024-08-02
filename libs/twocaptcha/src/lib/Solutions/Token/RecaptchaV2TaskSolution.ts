/**
 * - {@link https://2captcha.com/api-docs/recaptcha-v2}
 * - {@link https://2captcha.com/api-docs/recaptcha-v2-enterprise}
 */
export interface RecaptchaV2TaskSolution {
  gRecaptchaResponse: string;
  token: string;
}