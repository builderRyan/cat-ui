import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '@components/index';
import '../../../styles/index.scss';
import './style.scss';
import Button from '../../Button';

const { useState } = React;

const Demo1 = () => {
  const [isOpen1, setisOpen1] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
  const [isOpen3, setisOpen3] = useState(false);
  const [isOpen4, setisOpen4] = useState(false);

  const footer = (
    <div className='footer'>
      <Button type='link' onClick={() => setisOpen2(false)}>
        Cancel
      </Button>
      <Button size='md' onClick={() => setisOpen2(false)}>
        Submit
      </Button>
    </div>
  );

  return (
    <div className='modal-box'>
      <Button className='modal-button' onClick={() => setisOpen1(true)}>
        基础Modal
      </Button>
      <Button className='modal-button' onClick={() => setisOpen2(true)}>
        自定义footer的Modal
      </Button>
      <Button className='modal-button' onClick={() => setisOpen3(true)}>
        align=center的Modal
      </Button>
      <Button className='modal-button' onClick={() => setisOpen4(true)}>
        align=center && noCloseIcon的Modal
      </Button>
      <Modal
        title='Enter the amount you want to redeem'
        visible={isOpen1}
        cancelText=''
        okText='Submit'
        onClose={() => setisOpen1(false)}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
      <Modal
        title='Enter the amount you want to redeem'
        visible={isOpen2}
        align='center'
        cancelText=''
        okText='Submit'
        footer={footer}
        onClose={() => setisOpen2(false)}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
      <Modal
        title='Enter the amount you want to redeem'
        visible={isOpen3}
        align='center'
        cancelText=''
        okText='Submit'
        onClose={() => setisOpen3(false)}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
      <Modal
        title='Enter the amount you want to redeem'
        visible={isOpen4}
        align='center'
        cancelText=''
        okText='OK'
        noCloseIcon
        onClose={() => setisOpen4(false)}
      >
        <p>
          Please ensure that the amount you are redeeming does not exceed the
          remaining total amount.
        </p>
      </Modal>
    </div>
  );
};

storiesOf('Modal 模态窗', module).add('Modal', () => <Demo1 />);
