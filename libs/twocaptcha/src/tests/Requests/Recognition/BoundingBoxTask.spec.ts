import { BoundingBoxTask } from "../../../lib/Requests/Recognition/BoundingBoxTask";

describe("BoundingBoxTask", () => {
  it("To be equal to object", () => {
    const task = new BoundingBoxTask({
      body: "some-body",
      comment: "some-comment",
      imgInstructions: "some-imgInstructions"
    });

    expect(task).toEqual({
      _isBoundingBoxTask: true,
      body: "some-body",
      comment: "some-comment",
      imgInstructions: "some-imgInstructions",
      type: "BoundingBoxTask"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new BoundingBoxTask({
      body: "some-body",
      comment: "some-comment"
    });

    expect(task).toEqual({
      _isBoundingBoxTask: true,
      body: "some-body",
      comment: "some-comment",
      type: "BoundingBoxTask"
    });
  });
});
