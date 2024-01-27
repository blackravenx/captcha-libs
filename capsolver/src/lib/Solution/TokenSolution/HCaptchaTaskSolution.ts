import type { } from "../_BaseSolution";

export type HCaptchaTaskSolution = {
  captchaKey: string;
  expireTime: number;
  gRecaptchaResponse: string;
  timestamp: number;
  userAgent: string;
};