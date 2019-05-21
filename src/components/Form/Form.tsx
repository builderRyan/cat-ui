import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import * as noop from 'lodash/noop'
import { StyledForm } from './styled'
import FormItem from './FormItem'
import kindOf from '../../utils/kindOf'

export interface FormProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** label 标签的文本对齐方式 */
  labelAlign?: object;
  /** label 标签布局 */
  labelWidth?: string | number;
  /** 配置 Form.Item 的 colon 的默认值 */
  colon?: boolean;
  /** 获取表单values和errors的回调函数 */
  getFormFields?: (values?: object, errors?: object) => {};
}

/**
 * 表单
 */
class Form extends Component<FormProps, any> {
  static Item: typeof FormItem;
  static defaultProps = {
    colon: false
  }

  constructor (props: FormProps) {
    super(props)
    this.state = {
      values: {},
      errors: {}
    }
  }

  componentDidMount () {
    const { children } = this.props
    React.Children.map(children, (element: any, index) => {
      if (!element) { return }
      const { values, errors } = this.state
      const child = element.props.children
      const componentType = child.type.name
      const { name, defaultValue, value } = element.props
      switch (componentType) {
        case 'Button':
          break
        case 'CheckboxGroup':
          values[name] = []
          errors[name] = ''
          break
        case 'Select':
        default:
          values[name] = ''
          errors[name] = ''
          break
      }
      // console.log('Form:componentType', componentType, errors)
      this.setState({ values: values, errors: errors })
    })
  }

  componentDidUpdate() {
    const { getFormFields } = this.props
    // console.log('FormItem:componentDidUpdate', this.state)
    // getFormFields && getFormFields(this.state, {})
  }

  // 字段改变的回调函数
  onFieldChange = (field: string, value: any, error: string)  => {
    const { values, errors } = this.state
    values[field] = value
    errors[field] = error
    // const newValues = { ...values, [field]: value }
    // const newErrors = { ...errors,[field]: error }
    // console.log('Form:onFieldChange:1', field, value, error)
    this.setState({ values, errors })
  }

  // 提交按钮的点击回调函数
  onSubmitClick = (fn?: (values?: any, errors?: any) => {})  => {
    const { values, errors } = this.state
    console.log('Form:onSubmitClick', values, errors)
    fn(values, errors)
  }

  render() {
    const self = this
    const { className, style, labelWidth, labelAlign, children } = this.props
    const classes = classNames('hmly-form', className)
    const items = React.Children.map(children, (element: any, index) => {
      if (!element) { return element }
      return cloneElement(element, {
        key: index,
        labelWidth: labelWidth,
        labelAlign: labelAlign,
        onFieldChange: self.onFieldChange,
        onSubmitClick: self.onSubmitClick
      })
    })

    // console.log('Form:render', this.state)

    return (
      <StyledForm
        className={classes}
        style={style}>
        {items}
      </StyledForm>
    )
  }
}

export default Form
