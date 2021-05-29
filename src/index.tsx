import * as React from 'react'
import { AceListPropsType } from './interface'

const { useRef, useState } = React

export const AceList: React.FC<AceListPropsType> = (props) => {
  const scrollContainer = useRef<HTMLDivElement>(null)
  // 目前渲染的数据列表
  const [renderedDataSource, setRenderedDataSource] = useState<any[]>([])
  const [scrollTop, setScrollTop] = useState<number>(0)
  const { rowRenderer, dataSource = [], height, rowHeight } = props

  const handleScroll = () => {
    const currentScrollTop = scrollContainer.current?.scrollTop || 0
    setScrollTop(currentScrollTop - currentScrollTop % rowHeight)
    const visibleCount = Math.ceil(height / rowHeight)
    const startIndex = Math.floor(currentScrollTop / rowHeight)
    const endIndex = startIndex + visibleCount
    const visibleDataSource = dataSource.slice(startIndex, endIndex)
    setRenderedDataSource(visibleDataSource)
  }

  return <div style={{ height, overflow: 'scroll' }} onScroll={handleScroll} ref={scrollContainer}>
    <div style={{ height: rowHeight * dataSource.length, position: 'relative', paddingTop: scrollTop }}>
      {
        renderedDataSource.map((dataItem, index) => {
          return rowRenderer(dataItem, index)
        })
      }
    </div>
  </div>
}
