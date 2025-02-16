export type CaptchaClientParams = {
  "baseUrl"?: string;
  "clientKey": string;
  "pollingInterval"?: number;
  "timeout"?: number;
};

export type CapGuruResponse<TRequest> = {
  "request": TRequest;
  "status": number;
};
