export interface CaptchaClientParams {
  clientKey: string;
  pollingInterval?: number;
  timeout?: number;
}

export type CapSolverCreateTaskResponse<TSolution = unknown> = {
  errorCode: string;
  errorDescription: string;
  errorId: number;
  solution?: TSolution;
  taskId: string;
};

export interface CapSolverBalanceResponse {
  balance: number;
  errorCode?: string;
  errorDescription?: string;
  errorId: number;
  packages?: Package[];
}

export interface Package {
  activeTime: number;
  expireTime: number;
  numberOfCalls: number;
  packageId: string;
  status: number;
  token: string;
  type: number;
}

export interface FeedbackTaskParams {
  code?: number;
  invalid: boolean;
  message?: string;
  taskId: string;
}

export interface FeedbackResponse {
  errorCode?: string;
  errorDescription?: string;
  errorId: number;
  message: string;
}