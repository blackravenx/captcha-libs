import type { CapSolverBaseSolution } from "../_BaseSolution";

type MultiSolution = {
  objects: number[];
  size: number;
  type: string;
};

type SingleSolution = {
  hasObject: boolean;
  size: number;
  type: string;
};

export type ReCaptchaV2ClassificationSolution = CapSolverBaseSolution<MultiSolution | SingleSolution>;
