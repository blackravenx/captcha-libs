/**
 * {@link https://docs.capsolver.com/guide/api-gettaskresult.html#example-response}
 */
export interface CapSolverSolution<Solution> {
  errorCode?: string;
  errorDescription?: string;
  errorId: number;
  solution: Solution;
  status: string;
  taskId: string;
}
