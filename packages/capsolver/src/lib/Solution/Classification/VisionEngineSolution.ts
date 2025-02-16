interface VisionEngineAngleSolution { "angle": number }

interface VisionEngineDistanceSolution { "distance": number }

interface VisionEngineSpaceDetectionSolution { "box": number[] }

/**
 * @see {@link https://docs.capsolver.com/guide/recognition/VisionEngine.html#example-response}
 */
export type VisionEngineSolution = VisionEngineAngleSolution & VisionEngineDistanceSolution & VisionEngineSpaceDetectionSolution;
