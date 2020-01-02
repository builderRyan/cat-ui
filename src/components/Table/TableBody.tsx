import React from 'react';
import { Component } from 'react';
import { ColumnProps, Align } from './interface';
import TableTr from './TableTr';
import Empty from './Empty';
import PropTypes from 'prop-types';

export interface TableBodyProps<T> {
  /**
   * 行对应的 key 值
   */
  rowKey: string;
  /** 
   * 每一列需要的所有数据
   */
  columns: ColumnProps<T>[];
  /** 
   * 每一行需要展示的数据	interfaceinterindex
   */
  currentPageData: Array<T>;
  /** 
   * 对齐
   */
  align: Align;
  /** 
   * 是否可拖拽的
   */
  draggable?: boolean;
  /** 
   * 自定义的空模板
   */
  empty: React.ReactNode;
  /** 
   * 空模板的文案
   */
  emptyText?: string;
  /** 
   * onDragChange
   */
  onDragChange?: any;
  /** 
   * 获取被拖拽的元素
   */
  draggedElement?: any;
  /** 
   * 
   */
  onDragStart?: any;
  /** 
   * 
   */
  onDragOver?: any;
  /** 
   * 
   */
  onDragEnd?: any;
  /** 
   * 返回排序后的id列表
   */
  onSort?: (sortedIds?: Array<any>, activeId?: any) => void;
}

/**
 * TableBody
 */
class TableBody<T> extends Component<TableBodyProps<T>> {
  static propTypes = {
    rowKey: PropTypes.string,
  }

  static defaultProps = {
  }


  private draggerRef: any;
  private dragged: any;
  private over: any;

  constructor(props: TableBodyProps<T>) {
    super(props);
    this.draggerRef = React.createRef();
  }

  handleDragStart = (event: any) => {
    const { onDragStart } = this.props;
    this.dragged = event.currentTarget;
    onDragStart && onDragStart(event);
  };

  handleDragOver = (event: any) => {
    const { onDragOver } = this.props;
    event.preventDefault();
    this.over = event.target.closest('.cat-table__row');

    // 若未找到安放的DOM元素，则设为本身
    if (this.over === null) {
      this.over = this.dragged;
    }
    onDragOver && onDragOver(event);
  };

  handleDragEnter = (event: any) => {
    const node = event.target.closest('.cat-table__row');
    const newStyle = 'transform: translateY(10px);';
    node.setAttribute('style', newStyle);
  };

  onDragLeave = (event: any) => {
    const node = event.target.closest('.cat-table__row');
    node.removeAttribute('style');
  };

  handleDragEnd = (event: any, activeId: any) => {
    const {
      currentPageData,
      draggedElement,
      onDragEnd,
      onSort,
      onDragChange
    } = this.props;
    let from = Number(this.dragged.dataset.order);
    let to = Number(this.over.dataset.order);
    let childrenNode = Array.from(currentPageData as any);

    this.over.removeAttribute('style');

    // 排序前的id列表
    let ids: Array<any> = [];
    childrenNode.forEach((element: any, index) => {
      ids.push(element.id);
    });

    let draggedNode = childrenNode.splice(from - 1, 1)[0];
    childrenNode.splice(to - 1, 0, draggedNode);

    // 返回拖拽的DOM
    let _draggedEleIndex = childrenNode.indexOf(draggedNode);
    let draggerDOM = this.draggerRef.current;
    let _draggedEle = draggerDOM.querySelector(
      `:nth-child(${_draggedEleIndex + 1})`
    );

    // 返回排序后的id列表
    let sortedIds: Array<any> = [];
    childrenNode.forEach((element: any, index) => {
      sortedIds.push(element.id);
    });

    const isMoved = JSON.stringify(sortedIds) !== JSON.stringify(ids);

    onDragChange && onDragChange(childrenNode);
    draggedElement && draggedElement(_draggedEle);
    onDragEnd && onDragEnd(event);
    if (onSort && isMoved) {
      onSort(sortedIds, activeId);
    }
  };

  renderTrs = () => {
    const { columns, currentPageData, align, draggable, rowKey } = this.props;
    return (currentPageData as any[]).map((record, index) => {
      const trDraggable =
        'draggable' in record ? record.draggable : draggable;
      return (
        <TableTr
          key={record[rowKey]}
          order={index + 1}
          columns={columns}
          record={record}
          align={align}
          draggable={trDraggable}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
        />
      );
    });
  };

  render() {
    const {
      columns,
      currentPageData,
      empty,
    } = this.props;

    return (
      <tbody
        ref={this.draggerRef}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.onDragLeave}
      >
        {currentPageData.length === 0 ? (
          <Empty colSpan={columns.length} empty={empty} />
        ) : (
            this.renderTrs()
          )}
      </tbody>
    );
  }
}

export default TableBody;
