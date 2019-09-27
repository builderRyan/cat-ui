import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import { ColumnProps } from './interface';

export interface TableTrProps {
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
  /** 每一行的数据 */
  data?: any;
  /** 对齐 */
  align?: string;
  /** 是否可拖拽的 */
  draggable?: boolean;
  /** id */
  id?: string | number;
  /** order */
  order?: string | number;
  /** onDragStart */
  onDragStart?: any;
  /** onDragEnd */
  onDragEnd?: any;
}

/**
 * TableTr
 */
class TableTr extends Component<TableTrProps, any> {
  constructor(props: TableTrProps) {
    super(props);
    this.state = {
      dragging: false
    };
  }

  handleDragStart = (e: any) => {
    const { onDragStart } = this.props;
    onDragStart && onDragStart(e);
    this.setState({ dragging: true });
  };

  handleDragEnd = (e: any) => {
    const { onDragEnd, data } = this.props;
    const { id } = data;
    onDragEnd && onDragEnd(e, id);
    this.setState({ dragging: false });
  };

  renderTds = () => {
    const { columns, data } = this.props;
    const prefix = 'cat-table__col';
    return columns.map((elem: any) => {
      const id = elem.id;
      // 渲染字符串或函数返回的DOM
      const result = typeof data[id] === 'function' ? data[id]() : data[id];
      return (
        <td key={id} className={prefix}>
          {elem.render ? (
            elem.render(result, data)
          ) : (
            <div className="cat-table__col-inner">{result}</div>
          )}
        </td>
      );
    });
  };

  render() {
    const { dragging } = this.state;
    const { align, draggable, data, order } = this.props;
    const { id } = data;

    const prefix = 'cat-table__row';
    const classes = classNames(prefix, `${prefix}--${align}`, {
      [`${prefix}-dragging`]: dragging,
      [`${prefix}--draggable`]: draggable
    });
    const tds = this.renderTds();

    return (
      <tr
        draggable={draggable}
        data-order={order}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        className={classes}
      >
        {tds}
      </tr>
    );
  }
}

export default TableTr;
