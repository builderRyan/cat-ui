import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { RadioInnerProps } from '../interface'

const StyledRadioBox = styled.div`
  position: relative;
  padding: 0;
  list-style: none;
  display: inline-block;
  line-height: 1.5;
  white-space: nowrap;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: -2px;
  color: #767676;
  font-weight: 600;
  & + & {
    margin-left: 40px;
  }
`;

const StyledRadio = styled.span`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  line-height: 1;
  vertical-align: text-top;
`

const RadioInner = styled.span`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #313646;
  border-radius: 50%;
  transition: all .3s;
  box-sizing: border-box;
  background-color: #f5f5f5;
  &::after {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 4px;
    top: 4px;
    border-radius: 50%;
    display: table;
    border-top: 0;
    border-left: 0;
    content: " ";
    background-color: #313646;
    opacity: ${(props: RadioInnerProps) => props.checked ? 1: 0};
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
    box-sizing: border-box;
  }
`

const RadioInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  padding: 0;
  box-sizing: border-box;
`;

const RadioSlot = styled.span`
  display: inline-block;
  word-wrap: break-word;
  white-space: pre-wrap;
  margin-top: -2px;
  padding-left: 13px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  box-sizing: border-box;
  vertical-align: text-top;
`
const StyledRadioGroup = styled.div``

export { StyledRadioBox, StyledRadio, RadioInput, RadioInner, RadioSlot, StyledRadioGroup }
