import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  objects: Array<number>;
};

export type FunCaptchaClassificationSolution = CapSolverBaseSolution<Solution>;