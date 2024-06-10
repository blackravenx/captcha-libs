/**
 * {@link https://2captcha.com/api-docs/geetest}
 */
export interface GeeTestV3TaskSolution {
  challenge: string;
  seccode: string;
  validate: string;
}