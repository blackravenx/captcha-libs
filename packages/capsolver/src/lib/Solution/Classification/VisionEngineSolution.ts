interface VisionEngineAngleSolution { "angle": number }

interface VisionEngineDistanceSolution { "distance": number }

interface VisionEngineSpaceDetectionSolution { "box": number[] }

interface VisionEngineSheinSolutionRect {
  "x1": number;
  "y1": number;
  "x2": number;
  "y2": number;
}

interface VisionEngineSheinSolution { "rects": VisionEngineSheinSolutionRect[] }

/**
 * @see {@link https://docs.capsolver.com/guide/recognition/VisionEngine.html#example-response}
 */
export type VisionEngineSolution = VisionEngineAngleSolution & VisionEngineDistanceSolution & VisionEngineSpaceDetectionSolution & VisionEngineSheinSolution;
