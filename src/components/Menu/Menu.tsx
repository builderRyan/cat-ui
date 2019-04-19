import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import { StyledMenu } from './styled'
import MenuItem from './MenuItem'

export interface MenuProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 菜单类型，现在支持扩展弹出、行内内嵌、原地替换三种 */
  mode?: 'pop' | 'inline' | 'replace';
}

/**
 * 菜单
 */
class Menu extends Component<MenuProps, any> {
  static Item: typeof MenuItem

  static defaultProps = {
    mode: 'pop'
  }

  render() {
    const self = this
    const { className, style, mode, children } = this.props
    const classes = classNames('hmly-menu', {
      [`hmly-menu-${mode}`]: mode
    }, className)

    const items = React.Children.map(children, (element: any, index) => {
      if (!element) { return element }
      return cloneElement(element, {
        key: index
      })
    })

    return (
      <StyledMenu
        className={classes}
        style={style}>
        {items}
      </StyledMenu>
    )
  }
}

export default Menu
