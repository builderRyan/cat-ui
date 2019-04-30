import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTableBox } from './styled'
import { ColumnProps } from './interface'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export interface TableProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 每一列需要的所有数据 */
  columns?: Array<ColumnProps>;
  /** 每一行需要展示的数据	 */
  dataSource?: Array<any>;
  /** 对齐 */
  align?: 'left' | 'center';
  /** 自定义的空模板 */
  empty?: React.ReactNode;
  /** 空模板的文案 */
  emptyText?: string;
}

/**
 * 表格（列表）
 */
class Table extends Component<TableProps, any> {
  static defaultProps = {
    align: 'left',
    emptyText: ''
  }

  constructor (props: TableProps) {
    super(props)
    this.state = {
      filterKeys: {}
    }
  }

  onFilterSelect = (id: any, value: any) => {
    // console.log('onFilterSelect', id, value)
    const _filterKeys = { id: id, value: value }
    this.setState({ filterKeys: _filterKeys })
  }

  render() {
    const { filterKeys } = this.state
    const { className, style, columns, dataSource, align, empty, emptyText } = this.props
    const classes = classNames('hmly-table', className)

    return (
      <StyledTableBox
        className={classes}
        style={style}>
        <table className='table'>
          <TableHeader
            align={align}
            columns={columns}
            filterKeys={filterKeys}
            onFilterSelect={this.onFilterSelect} />
          <TableBody
            align={align}
            columns={columns}
            dataSource={dataSource}
            filterKeys={filterKeys}
            empty={empty}
            emptyText={emptyText} />
        </table>
      </StyledTableBox>
    )
  }
}

export default Table
