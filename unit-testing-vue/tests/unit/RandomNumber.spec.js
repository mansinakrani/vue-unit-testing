import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('If button is clicked, randomNumber should be between 1 and 10', async () => {
    const wrapper = mount(RandomNumber)
    await wrapper.find('button').trigger('click') //Testing user interaction (we only have only one button so we can target with only one button element , trigger('event'))
    const randomNumber = parseInt(wrapper.find('span').text()) //fetch random value , use .find to find span and use .text to get value available in span , parseInt as we want value in int
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('If button is clicked, randomNumber should be between 200 and 300', async () => {
    // expect(true).toBe(false)
    const wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300,
      },
    })
    await wrapper.find('button').trigger('click') //Testing user interaction (we only have only one button so we can target with only one button element , trigger('event'))
    const randomNumber = parseInt(wrapper.find('span').text()) //fetch random value , use .find to find span and use .text to get value available in span , parseInt as we want value in int
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
