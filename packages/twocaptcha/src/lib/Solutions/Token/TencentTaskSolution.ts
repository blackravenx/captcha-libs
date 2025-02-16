/**
 * @see {@link https://2captcha.com/api-docs/tencent}
 */
export interface TencentTaskSolution {
  "appid": string;
  "randstr": string;
  "ret": number;
  "ticket": string;
}
