/**
 * {@link https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html#example-response-1}
 */
export interface AntiCloudflareTaskSolution {
  token: string;
  type: string;
  userAgent: string;
}