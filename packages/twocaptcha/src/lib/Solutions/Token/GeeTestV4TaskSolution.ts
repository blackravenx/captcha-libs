/**
 * @see {@link https://2captcha.com/api-docs/geetest}
 */
export interface GeeTestV4TaskSolution {
  "captcha_id": string;
  "captcha_output": string;
  "gen_time": string;
  "lot_number": string;
  "pass_token": string;
}
