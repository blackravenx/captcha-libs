import type { CapSolverBaseSolution } from "../_BaseSolution";

type Solution = {
  cookie: string;
  userAgent: string;
};

export type DataDomeSliderTaskSolution = CapSolverBaseSolution<Solution>;