import type { TwoCaptchaErrorResponse } from "../types";

export type TwoCaptchaSuccessSolution<TSolution> = {
  cost: string;
  createTime: number;
  endTime: number;
  errorId: number;
  ip: string;
  solution: TSolution;
  solveCount: number;
  status: string;
  taskId: number;
};

export type TwoCaptchaSolution<TSolution> = TwoCaptchaErrorResponse | TwoCaptchaSuccessSolution<TSolution>;