/**
 * @jest-environment jsdom
 */

import TestComponent from "@/TestComponent";
import { mount } from "@vue/test-utils";
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

test("ListComponent", () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;
  wrapper.setData({ marvelMovies: [...movies, "Endgame"] });
  expect(wrapper.html()).toMatchSnapshot();
});
