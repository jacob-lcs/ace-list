import * as React from 'react'

export interface AceListPropsType {
  /**
   * 渲染列表的数据源
   */
  dataSource: any[]
  /**
   * 从数据源(dataSource)中接受一条数据，以及它和它所在 section 的 ID。
   * 返回一个可渲染的组件来为这行数据进行渲染。
   */
   rowRenderer: (rowData: any, rowIndex: number) => React.ReactElement
  /**
   * 容器高度
   */
  height: number
  /**
   * 每一行的高度
   */
  rowHeight: number
}
