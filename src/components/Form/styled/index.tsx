import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { LabelBoxProps, ControlBoxProps, FormItemLabelProps } from '../interface'
import Icon from '../../Icon'

const StyledForm = styled.form``;

const StyledFormItem = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

const LabelBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: ${(props: LabelBoxProps) => props.align};
  margin-right: ${(props: LabelBoxProps) => props.offset};
  margin-top: ${(props: LabelBoxProps) => props.marginTop};
  width: ${(props: LabelBoxProps) => props.width};
  /* min-height: 50px; */
`;

const ControlBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  /* min-height: 50px; */
`;

const FormItemLabel = styled.label`
  position: relative;
  &.hmly-form-label-required::before {
    content: "*";
    position: absolute;
    top: 0;
    left: -15px;
    font-size: 20px;
    color: #ff8585;
  }
  &.hmly-form-label-colon::after {
    content: ":";
    position: absolute;
    top: -4px;
    right: -8px;
    font-size: 20px;
    color: #313646;
  }
`;

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

const LabelIcon = styled(Icon)`
  margin-left: 5px;
`;

export { StyledForm, StyledFormItem, FormItemLabel, FormItemControl,
  FormItemDesc, LabelBox, ControlBox, ItemError, LabelIcon }
