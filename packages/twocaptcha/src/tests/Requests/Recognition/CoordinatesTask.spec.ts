import { CoordinatesTask } from "../../../lib/Requests/Recognition/CoordinatesTask";

import { expect, it, describe } from "vitest";

describe("CoordinatesTask", () => {
  it("To be equal to object", () => {
    const task = new CoordinatesTask({
      "body": "some-body",
      "comment": "some-comment",
      "imgInstructions": "some-imgInstructions"
    });

    expect(task).toEqual({
      "_isCoordinatesTask": true,
      "body": "some-body",
      "comment": "some-comment",
      "imgInstructions": "some-imgInstructions",
      "type": "CoordinatesTask"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new CoordinatesTask({ "body": "some-body" });

    expect(task).toEqual({
      "_isCoordinatesTask": true,
      "body": "some-body",
      "type": "CoordinatesTask"
    });
  });
});
