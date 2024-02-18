export interface CapSolverSolution<Solution> {
  errorCode?: string;
  errorDescription?: string;
  errorId: number;
  solution: Solution;
  status: string;
  taskId: string;
}
