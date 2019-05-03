import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import RadioButton from "../index";

describe("<RadioButton />", () => {
  it("matches snapshot", () => {
    const instance = ReactTestRenderer.create(
      <RadioButton
        text="lkjasdfl"
        onChange={() => {}}
        value="mockValue"
        text="lkajsdflkjasfd"
        someOtherProp={() => {}}
      />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
