import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  box: Array<number>;
  imageSize: Array<number>;
  objects: Array<boolean>;
  tags: Array<string>;
};

export type HCaptchaClassificationSolution = CapSolverBaseSolution<Solution>;