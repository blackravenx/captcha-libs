import { DrawAroundTask } from "../../../lib/Requests/Recognition/DrawAroundTask";

describe("DrawAroundTask", () => {
  it("To be equal to object", () => {
    const task = new DrawAroundTask({
      body: "some-body",
      comment: "some-comment",
      imgInstructions: "some-imgInstructions"
    });

    expect(task).toEqual({
      _isDrawAroundTask: true,
      body: "some-body",
      comment: "some-comment",
      imgInstructions: "some-imgInstructions",
      type: "DrawAroundTask"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new DrawAroundTask({
      body: "some-body",
      comment: "some-comment"
    });

    expect(task).toEqual({
      _isDrawAroundTask: true,
      body: "some-body",
      comment: "some-comment",
      type: "DrawAroundTask"
    });
  });
});
