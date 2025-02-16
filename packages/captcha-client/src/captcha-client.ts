export abstract class CaptchaClient<TCreateTaskResponse, TaskRequests, TGetBalanceResponse = number> {
  protected static baseUrl: string;

  protected abstract clientKey: string;

  protected abstract timeout?: number;

  protected abstract pollingInterval?: number;

  protected abstract createTask (params: unknown): Promise<TCreateTaskResponse>;
  public abstract solve (params: TaskRequests): Promise<unknown>;
  public abstract getBalance (): Promise<TGetBalanceResponse>;
}
