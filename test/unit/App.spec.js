import React from 'react';
import { mount } from 'enzyme';
import App from "../../src/App";

describe('App', () => {
  it('renders hello world', () => {
    // mount the component
    const wrapper = mount(<App />);

    // check if .hello element has a value of Hello
    expect(wrapper.find('.hello').text()).toContain('Hello :)');
  }) ;
});
