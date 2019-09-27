import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import RadioGroup from './RadioGroup';

export interface RadioProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 是否选中 */
  checked?: boolean;
  /** 值 */
  value?: any;
  /** 布局 */
  layout?: 'vertical' | 'horizontal';
  /** 选项变化时的回调函数	 */
  onChange?: any;
}

/**
 * 单选框
 */
class Radio extends Component<RadioProps, any> {
  static defaultProps = {
    layout: 'horizontal'
  };

  static Group: typeof RadioGroup;

  handleChange = (e: any) => {
    console.log('handleChange');
  };

  handleClick = (e: any) => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }

    onChange &&
      onChange({
        target: {
          ...this.props,
          checked: e.target.checked
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e.nativeEvent
      });
  };

  render() {
    const {
      className,
      style,
      disabled,
      readOnly,
      checked,
      value,
      layout,
      children
    } = this.props;

    const prefix = 'cat-radio';
    const classes = classNames(
      `${prefix}-wrapper`,
      `${prefix}-wrapper--${layout}`,
      className
    );

    return (
      <div className={classes} style={style}>
        <span
          className={classNames(
            `${prefix}-inner-wrapper`,
            `${prefix}-inner-wrapper--${layout}`
          )}
        >
          <span
            className={classNames(`${prefix}-inner`, {
              [`${prefix}-inner--disabled`]: disabled,
              [`${prefix}-inner--checked`]: checked
            })}
          />
          <input
            className={classNames(prefix, {
              [`${prefix}--disabled`]: disabled
            })}
            value={value}
            checked={checked}
            disabled={disabled}
            readOnly={readOnly}
            onClick={this.handleClick}
            onChange={this.handleChange}
          />
        </span>
        <span
          className={classNames(
            'cat-radio__label',
            `cat-radio__label--${layout}`,
            {
              [`cat-radio__label--disabled`]: disabled
            }
          )}
        >
          {children}
        </span>
      </div>
    );
  }
}

export default Radio;
