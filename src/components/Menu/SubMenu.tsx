import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledSubMenu, InlineTitle, InlineMenu } from './styled'

export interface SubMenuProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 菜单类型，现在支持扩展弹出、行内内嵌、原地替换三种 */
  mode?: 'pop' | 'inline' | 'replace';
  /** 当前SubMenu的id */
  id?: boolean;
  /** 当前SubMenu的title */
  title?: string | React.ReactNode;
  /** 是否选中 */
  checked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** SubMenu点击事件的回调 */
  onClick?: any;
  /** Menu改变事件的回调 */
  onMenuChange?: any;
}

/**
 * SubMenu
 */
class SubMenu extends Component<SubMenuProps, any> {
  onItemClick = (e: any) => {
    const { onClick, onMenuChange, id } = this.props
    onClick && onClick(e)
    onMenuChange && onMenuChange(id)
  }

  renderContent = () => {
    const { mode, title, checked, children } = this.props
    let subMenuItems = null
    if (mode === 'inline') {
      subMenuItems = (
        <React.Fragment>
          <InlineTitle>
            {title}
          </InlineTitle>
          <InlineMenu>
            {children}
          </InlineMenu>
        </React.Fragment>
      )
    }

    if (mode === 'pop') {
      subMenuItems = (
        <React.Fragment>
          <InlineTitle>
            {title}
          </InlineTitle>
        </React.Fragment>
      )
    }

    if (mode === 'replace') {
      subMenuItems = (
        <React.Fragment>
          <InlineTitle>
            {title}
          </InlineTitle>
        </React.Fragment>
      )
    }
    return subMenuItems
  }

  render() {
    const { className, style, mode, title, checked, children } = this.props
    const classes = classNames('hmly-submenu', {
      [`hmly-submenu-${mode}`]: mode,
      [`hmly-submenu-checked`]: checked
    }, className)

    const subMenuItems = this.renderContent()
    // console.log('subMenuItems', mode, subMenuItems)

    return (
      <StyledSubMenu
        className={classes}
        style={style}
        onClick={this.onItemClick}>
        {subMenuItems}
      </StyledSubMenu>
    )
  }
}

export default SubMenu
