import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { InputBlock } from "../index";

describe("<InputBlock />", () => {
  it("matches snapshot", () => {
    const instance = ReactTestRenderer.create(
      <InputBlock
        index={0}
        changeValue={() => {}}
      />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("updates state", () => {
    const instance = ReactTestRenderer.create(
      <InputBlock
        index={1}
        changeValue={() => {}}
      />
    );

    const input = instance.root.findByProps({
      type: "text"
    });

    input.props.onChange({
      target: {
        value: "890"
      }
    });

    expect(instance.getInstance().state)
      .toEqual({
        value: "890"
      });

    input.props.onChange({
      target: {
        value: "80"
      }
    });

    expect(instance.getInstance().state)
      .toEqual({
        value: "80"
      });

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it("Calls changeValue", () => {
    const mockFn = jest.fn();
    const instance = ReactTestRenderer.create(
      <InputBlock
        index={1}
        changeValue={mockFn}
      />
    );

    const input = instance.root.findByProps({
      type: "text"
    });

    input.props.onChange({
      target: {
        value: "890"
      }
    });

    expect(mockFn).toBeCalledWith({
      index: 1,
      payload: "890"
    });

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
