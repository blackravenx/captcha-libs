import { type $Fetch } from "ofetch";

abstract class CaptchaClient<TCreateTaskResponse, TGetBalanceResponse = number> {
  protected abstract clientKey: string;
  protected abstract timeout?: number;
  protected abstract pollingInterval?: number;
  protected abstract httpClient: $Fetch;
  protected abstract createTask(params: unknown): Promise<TCreateTaskResponse>;
  public abstract solve(params: unknown): Promise<unknown>;
  protected abstract getBalance(): Promise<TGetBalanceResponse>;
}

export { CaptchaClient };