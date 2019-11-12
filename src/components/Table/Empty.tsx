import * as React from 'react';
import { PureComponent } from 'react';

export interface EmptyProps {
  /** 空单元格可横跨的列数 */
  colSpan?: number;
  /** 自定义的空模板 */
  empty?: React.ReactNode;
  /** 空模板的文案 */
  emptyText?: string;
}

/**
 * Empty
 */
class Empty extends PureComponent<EmptyProps, any> {
  render() {
    const { colSpan, empty, emptyText } = this.props;

    // const defaultEmpty = (<EmptyInner image={EmptyBgImg}>
    //   <span className='content'>
    //     <span className='empty-bg' />
    //     <p className='empty-desc'>{emptyText}</p>
    //   </span>
    // </EmptyInner>)

    // <EmptyImage src={EmptyBgImg} />

    // const emptyDOM = empty ? empty : defaultEmpty

    return (
      <tr className="cat-table-row">
        <td colSpan={colSpan} className="table-td-empty">
          {empty}
        </td>
      </tr>
    );
  }
}

export default Empty;
