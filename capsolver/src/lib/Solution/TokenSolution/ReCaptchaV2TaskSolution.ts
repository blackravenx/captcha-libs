import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  expireTime: number;
  gRecaptchaResponse: string;
  userAgent: string;
};

export type ReCaptchaV2TaskSolution = CapSolverBaseSolution<Solution>;