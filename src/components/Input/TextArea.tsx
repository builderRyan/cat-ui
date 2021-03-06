import * as React from 'react';
import pick from 'lodash/pick';
import { IdomProps, inputStates } from './Input';
import { TinputState, HandleProps } from './interface';
import Wrapper from './Wrapper';
import Handles from './Handles';
import classNames from 'classnames';

export interface TextAreaProps extends HandleProps {
  /** 自动聚焦 */
  autoFocus?: boolean;
  /** 类名 */
  className?: string;
  /** 默认值 */
  defaultValue?: string;
  /** 禁用 */
  disabled?: boolean;
  /** 值 - 如果传入value属性，则input框变为受控, 因此输入框的值只根据value设置 */
  value?: string;
  /** 是否出错 */
  error?: boolean;
  /** 输入框消息提示 */
  message?: string;
  /** 自动大小计算 */
  autosize?: boolean;
  /** 显示计数 */
  showCount?: boolean;
  /** 最大长度 */
  maxlength?: number;
  /** 是否只读 */
  readonly?: boolean;
  /** 是否能对输入框进行复制、粘贴、剪贴的操作 */
  clipboardFree?: boolean;
  /** 是否能对输入框进行复制的操作 */
  copyFree?: boolean;
  /** 是否能对输入框进行粘贴的操作 */
  pasteFree?: boolean;
  /** 是否能对输入框进行剪贴的操作 */
  cutFree?: boolean;
  /** textarea style样式 */
  areaStyle?: object;
  /** 聚焦回调 */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => any;
  /** 失焦回调 */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => any;
  /** 值改变的回调 */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
  /** 按键的回调 */
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => any;
  /** 按下回车键的回调 */
  onPressEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => any;
  /** 执行粘贴操作的回调 */
  onPaste?: (
    e:
      | React.MouseEvent<HTMLTextAreaElement, MouseEvent>
      | React.ClipboardEvent<HTMLTextAreaElement>
  ) => any;
  /** 点击鼠标右键的回调 */
  onContextMenu?: (
    e:
      | React.MouseEvent<HTMLTextAreaElement, MouseEvent>
      | React.ClipboardEvent<HTMLTextAreaElement>
  ) => any;
  /** 执行复制操作的回调 */
  onCopy?: (
    e:
      | React.MouseEvent<HTMLTextAreaElement, MouseEvent>
      | React.ClipboardEvent<HTMLTextAreaElement>
  ) => any;
  /** 执行剪切操作的回调 */
  onCut?: (
    e:
      | React.MouseEvent<HTMLTextAreaElement, MouseEvent>
      | React.ClipboardEvent<HTMLTextAreaElement>
  ) => any;
}

export interface TextAreaStates {
  value: string;
  inputState: TinputState;
}

const domProps: IdomProps = {
  disabled: false,
  maxlength: 500,
  placeholder: '',
  readonly: false
};

class TextArea extends React.PureComponent<TextAreaProps, TextAreaStates> {
  static defaultProps = {
    autosize: false,
    disabled: false,
    error: false,
    placeholderOrigin: false,
    clipboardFree: true,
    copyFree: true,
    pasteFree: true,
    cutFree: true
  };

  constructor(props: TextAreaProps) {
    super(props);
    const value =
      (typeof props.value === 'undefined' ? props.defaultValue : props.value) ||
      '';
    const inputState = props.error ? inputStates.error : inputStates.default;
    this.state = {
      value,
      inputState
    };
  }

  render() {
    const { value, inputState } = this.state;
    const {
      className,
      message,
      showCount,
      maxlength,
      areaStyle,
      handleFocus,
      handleBlur,
      handleChange,
      handleKeyDown,
      handleMouseEnter,
      handleMouseLeave,
      handleClipboard
    } = this.props;
    const props = pick(this.props, domProps) as IdomProps;
    const prefix = 'cat-textarea';
    const classes = classNames(prefix);

    return (
      <Wrapper
        value={value}
        theme="textarea"
        state={inputState}
        className={className}
        message={message}
        showCount={showCount}
        maxlength={maxlength}
      >
        <textarea
          className={classes}
          value={value}
          style={areaStyle}
          onFocus={(handleFocus as any).bind(this)}
          onBlur={(handleBlur as any).bind(this)}
          onChange={(handleChange as any).bind(this)}
          onKeyDown={(handleKeyDown as any).bind(this)}
          onMouseEnter={(handleMouseEnter as any).bind(this)}
          onMouseLeave={(handleMouseLeave as any).bind(this)}
          onPaste={(handleClipboard as any).bind(this)}
          onContextMenu={(handleClipboard as any).bind(this)}
          onCopy={(handleClipboard as any).bind(this)}
          onCut={(handleClipboard as any).bind(this)}
          {...props}
        />
      </Wrapper>
    );
  }
}

export default Handles(TextArea as any);
