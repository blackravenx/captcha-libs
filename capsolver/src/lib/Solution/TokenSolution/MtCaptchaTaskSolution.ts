import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  token: string;
};

export type MtCaptchaTaskSolution = CapSolverBaseSolution<Solution>;