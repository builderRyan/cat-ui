import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { EmptyImgProps } from '../interface'

const StyledTableBox = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  clear: both;
  box-sizing: border-box;
  font-size: 12px;
  color: #4a4a4a;
  .table {
    width: 100%;
    border-collapse: collapse;
  }
`;

const StyledTr = styled.tr`
  text-align: left;
  &.hmly-table-row-center {
    text-align: center;
  }
`;

const StyledTd = styled.td`
  position: relative;
  vertical-align: middle;
  border-bottom: 1px solid #e1e6f0;
  padding: 20px 10px;
  line-height: 22px;
  word-break: break-all;
  font-size: 14px;
  font-weight: 600;
  color: #4a4a4a;
`;

const StyledTh = styled.th`
  position: relative;
  vertical-align: middle;
  border-bottom: 1px solid #e1e6f0;
  padding: 10px;
  line-height: 22px;
  text-align: left;
  word-break: break-all;
  color: #9b9b9b;
  font-size: 12px;
  font-weight: 600;
`;

const EmptyInner = styled.span`
  position: relative;
  .empty-desc {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #bcbcbc;
  }
`;

const EmptyImg = styled.img`
  display: block;
  width: 127px;
  height: auto;
  margin: 0 auto;
`;

export { StyledTableBox, StyledTr, StyledTd, StyledTh, EmptyInner, EmptyImg }
