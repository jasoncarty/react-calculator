import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { AnswerBlock } from "../index";

describe("<AnswerBlock />", () => {
  it("matches snapshot", () => {
    const instance = ReactTestRenderer.create(
      <AnswerBlock
        fieldValues={{ 0: "2", 1: "6", 2: "20" }}
        updateCalculationType={() => {}}
        calculationType={""}
      />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("matches snapshot", () => {
    const instance = ReactTestRenderer.create(
      <AnswerBlock
        fieldValues={{ 0: "2", 1: "6", 2: "20" }}
        updateCalculationType={() => {}}
        calculationType={"*"}
      />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("matches snapshot", () => {
    const instance = ReactTestRenderer.create(
      <AnswerBlock
        fieldValues={{ 0: "2", 1: "6", 2: "20" }}
        updateCalculationType={() => {}}
        calculationType={"+"}
      />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("updates state", () => {
    const instance = ReactTestRenderer.create(
      <AnswerBlock
        fieldValues={{ 0: "2", 1: "6", 2: "20" }}
        updateCalculationType={() => {}}
        calculationType={"+"}
      />
    );

    instance.update(
      <AnswerBlock
        fieldValues={{ 0: "4", 1: "6", 2: "20" }}
        updateCalculationType={() => {}}
        calculationType={"+"}
      />
    );

    expect(instance.getInstance().state)
      .toEqual({
        answer: 30
      });
  });

  it("calls updateCalculationType", () => {
    const mockFn = jest.fn();
    const instance = ReactTestRenderer.create(
      <AnswerBlock
        fieldValues={{ 0: "2", 1: "6", 2: "20" }}
        updateCalculationType={mockFn}
        calculationType={"+"}
      />
    );

    const sumRadio = instance.root.findByProps({ value: "SUM"});
    sumRadio.props.onChange({
      target: {
        value: "mockValue"
      }
    });

    expect(mockFn).toBeCalledWith("mockValue");
  });
});
