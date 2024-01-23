import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  captchaKey: string;
  expireTime: number;
  gRecaptchaResponse: string;
  timestamp: number;
  userAgent: string;
};

export type HCaptchaTaskSolution = CapSolverBaseSolution<Solution>;