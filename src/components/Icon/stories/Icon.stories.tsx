import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '@components/index';
import '../../../styles/index.scss';
import './style.scss';
import iconTypes from './iconTypes.json';
import ClipboardJS from 'clipboard';
import markdown from '../README.md';

import message from '../../messages';

const { useEffect } = React;

const SingleIcon = ({ type }) => {
  return (
    <div
      className='single-icon'
      data-clipboard-text={`<Icon type=${`"${type}"`} />`}
    >
      <Icon type={type} className='single-icon__icon'></Icon>
      <span>{type}</span>
    </div>
  );
};

const Demo = () => {
  useEffect(() => {
    const clipboard = new ClipboardJS('.single-icon');
    clipboard.on('success', function(e: any) {
      message.success({ content: 'Coped!' });
    });
  }, []);

  return (
    <div className='icon-stories'>
      {iconTypes.map(type => (
        <SingleIcon type={type} key={type} />
      ))}
    </div>
  );
};

storiesOf('Icon 字体图标', module).add(
  'icones',
  () => {
    return <Demo />;
  },
  {
    info: {
      text: markdown
    }
  }
);
