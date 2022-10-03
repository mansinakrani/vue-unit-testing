import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

//Tests Block
describe('HelloWorld.vue', () => {
  //Test Block
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    //Our component
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    //Assertion
    expect(wrapper.text()).toMatch(msg)
  })
})
