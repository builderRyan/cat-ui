import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Switch from '../index';
import '../../../styles/switch.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked) => {
    setChecked(checked)
  };

  return (
    <div className='switch-box'>
      <Switch onChange={handleChange} checked={checked} />
    </div>
  );
};

storiesOf('Switch 开关', module)
  .add('Switch', () => <Demo1 />);