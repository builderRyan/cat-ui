import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { LabelBoxProps, ControlBoxProps } from '../interface'

const StyledForm = styled.form``;

const StyledFormItem = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

const LabelBox = styled.div`
  display: inline-block;
  vertical-align: top;
  width: ${(props: LabelBoxProps) => props.width};
`;

const ControlBox = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const FormItemLabel = styled.label``;

const FormItemDesc = styled.div`
  margin-top: 10px;
  opacity: 0.7;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #313646;
`;

const FormItemControl = styled.div``;

const ItemError = styled.div`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  font-style: italic;
  color: #ff8585;
`;

export { StyledForm, StyledFormItem, FormItemLabel, FormItemControl,
  FormItemDesc, LabelBox, ControlBox, ItemError }
