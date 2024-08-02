export interface CaptchaClientParams {
  clientKey: string;
  pollingInterval?: number;
  timeout?: number;
}

export interface TwoCaptchaErrorResponse {
  errorCode: string;
  errorDescription: string;
  errorId: number;
}

export interface TwoCaptchaSuccessResponse {
  errorId: number;
  taskId: number;
}

export interface TwoCaptchaReportTaskSuccessResponse {
  errorId: number;
  status: string;
}

export interface TwoCaptchaBalanceSuccessResponse {
  balance: number;
  errorId: number;
}

export type TwoCaptchaBalanceResponse = TwoCaptchaBalanceSuccessResponse | TwoCaptchaErrorResponse;

export type TwoCaptchaCreateTaskResponse = TwoCaptchaErrorResponse | TwoCaptchaSuccessResponse;

export type TwoCaptchaReportTaskResponse = TwoCaptchaErrorResponse | TwoCaptchaReportTaskSuccessResponse;
