import * as React from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'
import { StyledIcon } from './styled'
import {compatible} from './compatible'
import {IconType} from './IconTypeEnum'

export interface IconProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 图标类型 */
  type: string|IconType;
  /** 点击按钮时的回调 */
  onClick?: any;
}

/**
 * 图标
 */
class Icon extends PureComponent<IconProps, any> {
  static Type = IconType
  handleClick = (event: any) => {
    const { onClick } = this.props
    onClick && onClick(event)
  }

  render() {
    const { className, style, type } = this.props
    const classes = classNames('hmly-icon', `hmly-icon-${compatible(type)}`, className)

    return (<React.Fragment>
      <i
        className={classes}
        style={style}
        onClick={this.handleClick} />
      <StyledIcon />
    </React.Fragment>
    )
  }
}

export default Icon
