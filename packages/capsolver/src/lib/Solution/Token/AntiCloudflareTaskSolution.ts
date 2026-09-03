/**
 * @see {@link https://docs.capsolver.com/en/guide/captcha/cloudflare_turnstile/#example-response-1}
 */
export interface AntiCloudflareTaskSolution {
  "token": string;

  // @deprecated
  "type": string;
  "userAgent": string;
  "cookies": Record<string, string>;
}
