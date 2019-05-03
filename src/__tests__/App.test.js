import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReactTestRenderer from 'react-test-renderer';

import App from "../App";

const mockStore = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({
    fieldValues: {},
    calculationType: ""
  })
};

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={mockStore}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    const instance = ReactTestRenderer.create(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
