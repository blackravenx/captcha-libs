export interface CaptchaClientParams {
  "clientKey": string;
  "pollingInterval"?: number;
  "timeout"?: number;
}

/**
 * @see {@link https://docs.captchaai.com}
 * Raw response of a CaptchaAI in.php / res.php request when `json=1` is passed.
 * `status` is 1 on success, 0 otherwise. `request` holds the id, token or error code.
 */
export interface CaptchaAIResponse {
  "request": string;
  "status": number;
}

/**
 * Successful in.php submit response. `request` holds the created captcha id.
 */
export interface CaptchaAICreateTaskResponse {
  "request": string;
  "status": number;
}

/**
 * Successful getbalance response. `request` holds the balance as a string.
 */
export interface CaptchaAIBalanceResponse {
  "request": string;
  "status": number;
}

/**
 * res.php poll response. `status` 1 = solved (`request` holds the token/text),
 * `status` 0 with request CAPCHA_NOT_READY = still pending, any other request value = terminal error.
 */
export interface CaptchaAISolution {
  "request": string;
  "status": number;
}
