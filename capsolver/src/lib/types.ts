export type CaptchaClientParams = {
  clientKey: string;
  pollingInterval?: number;
  timeout?: number;
};

export type CapSolverCreateTaskResponse<TSolution =unknown> = {
  errorCode: string;
  errorDescription: string;
  errorId: number;
  solution?: TSolution;
  taskId: string;
};

export type CapSolverBalanceResponse = {
  balance: number;
  errorId: number;
  packages: Package[];
};

export type Package = {
  activeTime: number;
  expireTime: number;
  numberOfCalls: number;
  packageId: string;
  status: number;
  token: string;
  type: number;
};