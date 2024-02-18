
interface MultiSolution {
  objects: number[];
  size: number;
  type: string;
}

interface SingleSolution {
  hasObject: boolean;
  size: number;
  type: string;
}

export type ReCaptchaV2ClassificationSolution = MultiSolution | SingleSolution;
