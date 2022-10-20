/**
 * @jest-environment jsdom
 */
import GithubCard from "@/githubCard";
// import { mount } from "@vue/test-utils";
import { config } from "@vue/test-utils";

config.showDeprecationWarnings = false;

describe("methods", () => {
  test("comoposeUrl", () => {
    const { composeUrl } = GithubCard.methods;
    expect(composeUrl(123)).toBe("https://api.github.com/users/123");
    expect(composeUrl("freddyMercury")).toBe(
      "https://api.github.com/users/freddyMercury"
    );
  });

  test("fetchData", async () => {
    // this.url = this.composeUrl(this.username);
    // const response = await fetch(this.url);
    // this.data = await response.json();
    const jsonMock = jest.fn().mockResolvedValue("GITHUB DATA");
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock,
    });

    // const wrapper = mount(GithubCard, {
    //   methods: {
    //     composeUrl: () => "url",
    //   },
    // });

    // Instead of doing:
    // mount(Foo, {
    //   methods: {
    //     getData: () => {}
    //   }
    // })
    // const Foo = {
    //   created() {
    //     this.getData()
    //   },
    //   methods: {
    //     getData() {
    //       axios.get('...')
    //     }
    //   }
    // }

    const GithubCard = {
      created() {
        this.composeUrl();
      },
      methods: {
        composeUrl() {
          this.axios.get("url");
        },
      },
    };
    console.log(GithubCard);
    const wrapper = GithubCard;

    await wrapper.vm.fetchData();

    expect(window.fetch).toHaveBeenCalledWith("url");
    expect(jsonMock).toHaveBeenCalled();
    expect(wrapper.vm.data).toBe("GITHUB DATA");
  });
});
