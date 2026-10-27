export interface CaptchaClientParams {
  "clientKey": string;
  "pollingInterval"?: number;
  "timeout"?: number;
  "baseUrl"?: string;
}

export interface SolvechaErrorResponse {
  "errorCode": string;
  "errorDescription": string;
  "errorId": number;
}

export interface SolvechaCreateTaskResponse<TSolution = unknown> {
  "errorCode"?: string;
  "errorDescription"?: string;
  "errorId": number;
  "solution"?: TSolution;
  "status"?: "processing" | "ready";
  "taskId": string;
}

export interface SolvechaSolution<TSolution> {
  "errorCode"?: string;
  "errorDescription"?: string;
  "errorId": number;
  "solution": TSolution;
  "status": string;
  "taskId": string;
}

/**
 * Prepaid balance only. Plan quotas and the free daily quota are not part of it.
 */
export interface SolvechaBalanceResponse {
  "balance": number;
  "errorId": number;
  "packages": unknown[];
}

/**
 * Grid answer of ReCaptchaV2Classification: `objects` are tile numbers counted from 0.
 */
export interface ReCaptchaV2ClassificationSolution {
  "objects"?: number[];
  "hasObject"?: boolean;
  "size"?: number;
  "type"?: string;
}

export interface ImageToTextSolution {
  "text": string;
}
