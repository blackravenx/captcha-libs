import { type $Fetch } from "ofetch";

abstract class CaptchaClient<TCreateTaskResponse, TaskRequests, TGetBalanceResponse = number> {
  protected abstract clientKey: string;
  protected abstract timeout?: number;
  protected abstract pollingInterval?: number;
  protected abstract httpClient: $Fetch;
  protected abstract createTask(params: unknown): Promise<TCreateTaskResponse>;
  public abstract solve(params: TaskRequests): Promise<unknown>;
  protected abstract getBalance(): Promise<TGetBalanceResponse>;
}

const delay = async(timeout: number) =>
  await new Promise((resolve) => setTimeout(resolve, timeout));

export {
  CaptchaClient,
  delay
};