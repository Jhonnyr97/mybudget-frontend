import { mount } from '@vue/test-utils'
import Home from '@/components/Home/index.vue'

describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.vm).toBeTruthy()
  })
})
