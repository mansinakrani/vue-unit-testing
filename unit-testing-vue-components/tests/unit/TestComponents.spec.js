/**
 * @jest-environment jsdom
 */

import TestComponent from "@/TestComponent";
import { mount, shallowMount } from "@vue/test-utils";
import List from "@/listComponent";

// describe("TestComponent", () => {
test("mount a vue component", () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: "VueS",
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
// });

test("ListComponent Shallow", () => {
  console.log(mount(List).html());
  console.log(shallowMount(List).html());
});
