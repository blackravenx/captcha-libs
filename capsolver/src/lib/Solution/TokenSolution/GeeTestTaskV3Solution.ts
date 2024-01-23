import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  challenge: string;
  validate: string;
};

export type GeeTestTaskV3Solution = CapSolverBaseSolution<Solution>;