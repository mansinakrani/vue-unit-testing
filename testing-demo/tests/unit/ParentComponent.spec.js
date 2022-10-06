import { shallowMount } from "@vue/test-utils";
import ParentComponent from "@/components/ParentComponent.vue";

describe("ParentComponent.vue", () => {
    it("", () => {
        const wrapper = shallowMount(ParentComponent);
        expect(wrapper.text()).toContain("Parent");
    });
});