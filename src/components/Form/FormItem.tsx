import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import * as noop from 'lodash/noop'
import Icon from '../Icon'
import Tooltip from '../Tooltip'
import { StyledFormItem, FormItemLabel, FormItemControl, LabelBox,
  ControlBox, FormItemDesc, ItemError, LabelIcon } from './styled'

export interface FormItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 字段名称 */
  name: string;
  /** label */
  label?: string | React.ReactNode;
  /** label 标签布局 */
  labelWidth?: string | number;
  /** label 标签的文本对齐方式 */
  labelAlign?: string;
  /** label的向右偏移量 */
  labelOffset?: string | number;
  /** 是否必填 */
  required?: boolean;
  /** 描述信息 */
  desc?: string | React.ReactNode;
  /** 提示信息 */
  tips?: string | React.ReactNode;
  /** 校验规则 */
  check?: (field?: any) => {};
  /** 字段改变的回调函数 */
  onFieldChange?: (field: string, value: any, error: string) => {};
  /** 改变Form的isCheck属性 */
  toggleIsCheck?: (isCheck: boolean) => {};
  /** 设置子元素 label htmlFor 属性 */
  htmlFor?: string;
  /** 是否显示 label 后面的冒号 */
  colon?: boolean;
  /** values列表 */
  values?: any;
  /** errors列表 */
  errors?: any;
  /** 是否去校验字段 */
  isCheck?: boolean;
}

/**
 * FormItem
 */
class FormItem extends Component<FormItemProps, any> {
  private formItemRef: any;
  static defaultProps = {
    colon: false
  }

  constructor (props: FormItemProps) {
    super(props)
    this.formItemRef = React.createRef()
  }

  componentDidUpdate () {
    const { name, required, values, errors, isCheck, toggleIsCheck } = this.props
    const value = values[name]
    const error = errors[name]
    // 去校验表单
    if (required && isCheck) {
      this.handleItemChange(value)
      toggleIsCheck(false)
    }
    if (Boolean(error)) {
      const element = this.formItemRef.current
      const eleRect = element.getBoundingClientRect()
      const { top = 0 } = eleRect
      // 表单有错误且元素在屏幕视野之外
      if (element && top < 0) {
        element.scrollIntoView({ behavior: 'instant', block: 'center' })
      }
    }
    // console.log('FormItem:componentDidUpdate:value', isCheck, Boolean(error))
  }

  // 拦截每个Item的onChange事件
  handleItemChange = (value: any) => {
    const { name, check = noop, required, onFieldChange, children } = this.props
    const { props = {} } = children as React.ReactElement<any>
    const { onChange } = props
    const error = check(value)
    onChange && onChange(value, error)
    onFieldChange && onFieldChange(name, value, error)
    // console.log('FormItem:handleItemChange:error', value, error)
  }

  render() {
    const self = this
    const { className, style, name, label, desc, tips, labelWidth,
      labelAlign, labelOffset, required, values, errors, children } = this.props
    const classes = classNames('hmly-form-item', className)
    const labelClass = classNames({ 'hmly-form-label-required': required })
    const value = values[name]
    const error = errors[name]
    const { type: {name: componentType} } = children as any
    let item
    if (componentType === 'Input') {
      item = cloneElement(children as React.ReactElement<any>, {
        onChange: (e: any) => {self.handleItemChange(e.target.value)}
      })
    } else {
      item = cloneElement(children as React.ReactElement<any>, {
        onChange: self.handleItemChange
      })
    }

    // console.log('FormItem', value, error)

    return (
      <StyledFormItem
        className={classes}
        style={style}
        ref={this.formItemRef}>
        <LabelBox
          width={labelWidth}
          align={labelAlign}
          offset={labelOffset}>
          <FormItemLabel className={labelClass}>
            {label}
            {Boolean(tips) &&
              <Tooltip content={tips}>
                <LabelIcon type='question-circle' />
              </Tooltip>
            }
          </FormItemLabel>
          {Boolean(desc) && <FormItemDesc>
            {desc}
          </FormItemDesc>}
        </LabelBox>
        <ControlBox>
          <FormItemControl>
            {item}
          </FormItemControl>
          {Boolean(error) && <ItemError>
            {error}
          </ItemError>}
        </ControlBox>
      </StyledFormItem>
    )
  }
}

export default FormItem
