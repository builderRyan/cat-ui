import styled from 'styled-components'
import { primaryBtnColor, yellowBtnColor } from '../../../style/theme'

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  height: 100%;
  z-index: 1050;
`;

const InnerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: initial;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  font-size: 14px;
  white-space: normal;
  min-width: 450px;
  max-width: 600px;
`;

const ModalHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #4a4a4a;
`;

const ModalBody = styled.div`
  font-size: 18px;
  color: #4a4a4a;
`;


const ModalFooter = styled.div`
  float: right;
`;

export { ModalBox, InnerModal, ModalHeader, ModalBody, ModalFooter }
