import type { GeeTestV4TaskSolution } from "./GeeTestV4TaskSolution";
import type { GeeTestV3TaskSolution } from "./GeeTestV3TaskSolution";

/**
 * {@link https://2captcha.com/api-docs/geetest}
 */
export type GeeTestTaskSolution = GeeTestV3TaskSolution & GeeTestV4TaskSolution;