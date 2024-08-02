/**
 * {@link https://docs.capsolver.com/guide/captcha/Geetest.html#example-response-1}
 */
export interface GeeTestV4TaskSolution {
  captcha_id: string;
  captcha_output: string;
  gen_time: string;
  lot_number: string;
  pass_token: string;
  risk_type: string;
}