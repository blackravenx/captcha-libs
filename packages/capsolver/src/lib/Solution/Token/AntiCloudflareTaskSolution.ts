/**
 * @see {@link https://docs.capsolver.com/en/guide/captcha/cloudflare_turnstile/#example-response-1}
 */
export interface AntiCloudflareTaskSolution {
  "token": string;
  "type": string;
  "userAgent": string;
}
