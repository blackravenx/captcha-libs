import type { BaseParams } from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

type TClick = "funcap2" | "geetest" | "geetest2" | "hcap" | "hcap2" | "oth" | "recap" | "recap2";

export interface RecognitionBaseParams extends Omit<BaseParams, "method"> {
  body: string;
  click: TClick;
  textinstructions: string;
}

export class RecognitionBaseTask extends BaseTask implements RecognitionBaseParams {
  click: TClick;
  body: string;
  textinstructions: string;
  constructor({
    click, body, textinstructions
  }: RecognitionBaseParams) {
    super({ method: "base64" });
    this.click = click;
    this.body = body;
    this.textinstructions = textinstructions;
  }
}
