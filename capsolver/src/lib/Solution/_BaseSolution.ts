
export type CapSolverBaseSolution<Solution> = {
  errorCode?: string;
  errorDescription?: string;
  errorId: number;
  solution: Solution;
  status: string;
  taskId: string;
};
