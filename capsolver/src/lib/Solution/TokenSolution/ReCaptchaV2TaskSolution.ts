import type { } from "../_BaseSolution";

export type ReCaptchaV2TaskSolution = {
  expireTime: number;
  gRecaptchaResponse: string;
  userAgent: string;
};