import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

// Creates a block of tests, aka a "test suite"
describe('AppHeader.vue', () => {
  //   creates a Jest test
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    // An assertion about the expected outcome
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
