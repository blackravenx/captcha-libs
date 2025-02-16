import { GridTask } from "../../../lib/Requests/Recognition/GridTask";

import { expect, it, describe } from "vitest";

describe("GridTask", () => {
  it("To be equal to object", () => {
    const task = new GridTask({
      "body": "some-body",
      "columns": 3,
      "comment": "some-comment",
      "imgInstructions": "some-imgInstructions",
      "rows": 3
    });

    expect(task).toEqual({
      "_isGridTask": true,
      "body": "some-body",
      "columns": 3,
      "comment": "some-comment",
      "imgInstructions": "some-imgInstructions",
      "rows": 3,
      "type": "GridTask"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new GridTask({
      "body": "some-body",
      "comment": "some-comment"
    });

    expect(task).toEqual({
      "_isGridTask": true,
      "body": "some-body",
      "comment": "some-comment",
      "type": "GridTask"
    });
  });
});
