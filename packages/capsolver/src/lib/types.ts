export interface CaptchaClientParams {
  "clientKey": string;
  "pollingInterval"?: number;
  "timeout"?: number;
}

export type CapSolverCreateTaskResponse<TSolution = unknown> = {
  "errorCode": string;
  "errorDescription": string;
  "errorId": number;
  "solution"?: TSolution;
  "taskId": string;
};

export interface CapSolverBalanceSuccessResponse {
  "balance": number;
  "errorId": number;
  "packages": Package[];
}

export interface CapSolverBalanceErrorResponse {
  "errorCode": string;
  "errorDescription": string;
  "errorId": number;
}

export type CapSolverBalanceResponse = CapSolverBalanceSuccessResponse | CapSolverBalanceErrorResponse;

export interface Package {
  "packageId": string;
  "type": number;
  "title": string;
  "numberOfCalls": number;
  "status": number;
  "token": string;
  "expireTime": number;
}

export interface FeedbackTaskParams {
  "code"?: number;
  "invalid": boolean;
  "message"?: string;
  "taskId": string;
}

export interface FeedbackResponseError {
  "errorCode": string;
  "errorDescription": string;
  "errorId": number;
}

export interface FeedbackResponseSuccess {
  "errorId": number;
  "message": string;
}

export type FeedbackResponse = FeedbackResponseError | FeedbackResponseSuccess;
