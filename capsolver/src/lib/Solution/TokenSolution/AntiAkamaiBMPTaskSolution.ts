import type { CapSolverBaseSolution } from "../_BaseSolution";

type SensorSolution = {
  deviceId: string;
  deviceName: string;
  sensors: string[];
  version: string;
};

type PowSolution = {
  pow: string;
};

export type AntiAkamaiBMPTaskSolution = CapSolverBaseSolution<PowSolution | SensorSolution>;