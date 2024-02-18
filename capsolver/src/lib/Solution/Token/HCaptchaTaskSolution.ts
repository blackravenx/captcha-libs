export interface HCaptchaTaskSolution {
  captchaKey: string;
  expireTime: number;
  gRecaptchaResponse: string;
  timestamp: number;
  userAgent: string;
}