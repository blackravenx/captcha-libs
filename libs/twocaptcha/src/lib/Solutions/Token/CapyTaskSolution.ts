/**
 * {@link https://2captcha.com/api-docs/capy-puzzle-captcha}
 */
export interface CapyTaskSolution {
  answer: string;
  captchakey: string;
  challengekey: string;
  respKey: string;
}