import * as React from 'react'
import { PureComponent } from 'react'
import * as ReactDOM from 'react-dom'
import * as memoizeOne from 'memoize-one'
// import classNames from 'classnames'
import PortalContent from './PortalContent'

export interface ProtalProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 样式 */
  selector?: string;
  /** 子元素 */
  children?: React.ReactNode;
  /** 弹层是否可见 */
  visible?: boolean;
  /** 返回传送门需要渲染的内容，优先级高于children */
  render?: () => {};
  /** children 被 mount 之后的回调函数 */
  onMount?: () => {};
  /** children 被 unmount 之后的回调函数 */
  onUnmount?: () => {};
}

class Portal extends PureComponent<ProtalProps, any> {
  static defaultProps = {
    selector: 'body'
  }

  // componentDidMount() {
  //   const { visible, selector } = this.props
  //   const node = this.getContainer(selector)
  //   console.log('node', node, visible)
  //   if ((visible === undefined) || visible) {
  //     node.setAttribute('style', 'overflow: hidden;')
  //     // const { style } = node
  //     // style.overflow = 'hidden'
  //   }
  // }

  // componentWillUnmount() {
  //   const { visible } = this.props
  // }

  // getContainer = memoizeOne((selector: string) => {
  //   let node = document.querySelector(selector) || document.body
  //   // if (!this.props.append) {
  //   //   removeAllChildren(node);
  //   // }
  //   return node
  // })

  getContainer = (selector: string) => {
    let node = document.querySelector(selector) || document.body
    // if (!this.props.append) {
    //   removeAllChildren(node);
    // }
    return node
  }

  render() {
    const { selector, onMount, onUnmount, render, visible, children } = this.props
    const domNode = this.getContainer(selector)
    const content = render ? render() : children

    if (!visible) { return null}
    if (!domNode) { return null }

    return ReactDOM.createPortal(
      <PortalContent onMount={onMount} onUnmount={onUnmount}>
        {content}
      </PortalContent>,
      domNode
    )
  }
}

export default Portal
