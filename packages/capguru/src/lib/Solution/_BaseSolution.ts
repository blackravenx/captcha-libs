import type { CapGuruResponse } from "../types";

export type CapGuruSolution<TSolution> = CapGuruResponse<string> & { "solution": TSolution | undefined };
