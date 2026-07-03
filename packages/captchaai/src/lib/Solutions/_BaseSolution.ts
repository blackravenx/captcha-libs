import type { CaptchaAISolution } from "../types";

/**
 * @see {@link https://docs.captchaai.com}
 * CaptchaAI res.php success solution. `request` holds the solved token or text,
 * `status` is 1 on success.
 */
export type CaptchaAISuccessSolution = CaptchaAISolution;

export type { CaptchaAISolution };
