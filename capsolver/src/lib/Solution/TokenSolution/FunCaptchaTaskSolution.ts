import type { CapSolverBaseSolution } from "../_BaseSolution";

interface Solution {
  token: string;
  userAgent: string;
}

export type FunCaptchaTaskSolution = CapSolverBaseSolution<Solution>;