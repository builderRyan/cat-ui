import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledOption } from './styled'

export interface OptionProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 当前条目的值 */
  value?: string | number;
  /** 是否禁用 */
  disable?: boolean;
  /** 内部点击事件的回调 */
  onOptionClick?: any;
  /** 外部点击事件的回调 */
  onClick?: any;
}

/**
 * Option
 */
class Option extends Component<OptionProps, any> {
  static defaultProps = {
    disable: false
  }


  handleClick = () => {
    const { value, onOptionClick, onClick, disable, children } = this.props
    if (!disable && onOptionClick) {
      onOptionClick(value, children)
    }
    onClick && onClick(value, children)
  }

  render() {
    const { className, style, disable, children } = this.props
    const classes = classNames('hmly-option', {
      'hmly-option-disable': disable
    }, className)

    return (
      <StyledOption
        className={classes}
        style={style}
        onClick={this.handleClick}>
        {children}
      </StyledOption>
    )
  }
}

export default Option
