import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Radio from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Radio', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Radio>Test</Radio>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})
