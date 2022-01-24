import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

//test 1: app loads/mount without failure
test("App runs without crashing", () => {
  const wrapper = shallow(<App />);
  const appElement = wrapper.find("[data-test='app-container']");
  console.log(appElement.debug);
  expect(appElement.length).toBe(1);
});
