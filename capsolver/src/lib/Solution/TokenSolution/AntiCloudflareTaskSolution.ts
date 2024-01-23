import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  token: string;
  type: string;
  userAgent: string;
};

export type AntiCloudflareTaskSolution = CapSolverBaseSolution<Solution>;