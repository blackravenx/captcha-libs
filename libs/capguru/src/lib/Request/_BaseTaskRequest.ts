const _TaskMethods = [
  "hcaptcha",
  "base64",
  "turnstile",
  "hcaptcha",
  "userrecaptcha"
] as const;

export type TaskMethods = typeof _TaskMethods[keyof typeof _TaskMethods];

export type ProxyTypes = "HTTP" | "HTTPS" | "SOCKS4" | "SOCKS5";

export interface BaseParams {
  method: TaskMethods;
}

type SolutionTypes = "isGrid" | "isMultipleCoordinates" | "isSingleCoordinate" | "isString";

export type TaskSolutionTypes = {
  [type in SolutionTypes]?: boolean
};

/**
   * @classdesc BaseTask for CapGuru tasks
   * @class
   */
export abstract class BaseTask {

  /**
   * @type {TaskMethods} method - task type/method
   */
  protected method: TaskMethods;

  constructor({ method }: BaseParams) {
    this.method = method;
  }
}