import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  box: number[];
  distance: number;
};

export type AwsWafClassificationSolution = CapSolverBaseSolution<Solution>;