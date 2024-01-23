export interface CapSolverBaseSolution<Solution> {
  errorCode?: any;
  errorDescription?: any;
  errorId: number;
  solution: Solution;
  status: string;
}
