import type { ClassificationSolutions } from "./ClassificationSolution";
import type { TokenSolutions } from "./TokenSolution";

export type Solution = ClassificationSolutions & TokenSolutions;

export * from "./ClassificationSolution";
export * from "./TokenSolution";
export * from "./_BaseSolution";