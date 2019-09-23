import * as React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import Portal from '../Portal';
import Icon from '../Icon';

export type MessageType = 'success' | 'warn' | 'error';

export interface MessageContentProps {
  text?: string;
  type?: MessageType;
}

const IconTypeMap = {
  success: Icon.Type.success,
  warn: Icon.Type.warning,
  error: Icon.Type.error
};

class MessageContent extends Component<MessageContentProps, any> {
  render() {
    const { text, type } = this.props;
    const prefix = 'hmly-message';
    const classes = classNames(prefix, {
      [`${prefix}--success`]: type === 'success',
      [`${prefix}--warn`]: type === 'warn',
      [`${prefix}--error`]: type === 'error'
    });

    return (
      <Portal visible>
        <div className={classes}>
          <Icon
            type={IconTypeMap[type]}
            className={`${prefix}-message__icon`}
          />
          <span className={`${prefix}-message__text`}>{text}</span>
        </div>
      </Portal>
    );
  }
}

export default MessageContent;
