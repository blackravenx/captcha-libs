import type { GeeTestV4TaskSolution } from "./GeeTestV4TaskSolution";
import type { GeeTestV3TaskSolution } from "./GeeTestV3TaskSolution";

export type GeeTestTaskSolution = GeeTestV3TaskSolution & GeeTestV4TaskSolution;