import { changeCalculationType } from "../actions";

describe("AnswerBlock actions", () => {
  it("returns an object", () => {
    expect(
      changeCalculationType("mockValue")
    ).toEqual({
      type: "mockValue"
    })
  });
});
