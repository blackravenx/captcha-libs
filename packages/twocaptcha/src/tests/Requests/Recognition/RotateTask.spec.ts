import { RotateTask } from "../../../lib/Requests/Recognition/RotateTask";

import { expect, it, describe } from "vitest";

describe("RotateTask", () => {
  it("To be equal to object", () => {
    const task = new RotateTask({
      "angle": 30,
      "body": "some-body",
      "comment": "some-comment",
      "imgInstructions": "some-imgInstructions"
    });

    expect(task).toEqual({
      "_isRotateTask": true,
      "angle": 30,
      "body": "some-body",
      "comment": "some-comment",
      "imgInstructions": "some-imgInstructions",
      "type": "RotateTask"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RotateTask({ "body": "some-body" });

    expect(task).toEqual({
      "_isRotateTask": true,
      "body": "some-body",
      "type": "RotateTask"
    });
  });
});
