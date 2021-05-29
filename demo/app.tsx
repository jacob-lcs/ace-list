import * as React from 'react'
import { AceList } from '../src/index'

const { useState } = React

const App: React.FC = () => {
  const [data, setData] = useState<number[]>([])

  /**
   * 生成测试数据
   */
  const generateData = () => {
    const now = Date.now()
    const total = 10000
    const randomDataList = []
    for (let i = 0; i < total; i++) {
      randomDataList.push(~~(Math.random() * total))
    }
    setData(randomDataList)
    console.log('JS 运行时间：', Date.now() - now)
    setTimeout(() => {
      console.log('总运行时间：', Date.now() - now)
    }, 0)
  }

  /**
   * 渲染每一行的 DOM
   */
  const renderRow = (rowData, rowIndex): React.ReactElement => {
    return <li key={rowIndex} style={{ height: 50 }}>{rowData}</li>
  }

  return (
    <div>
      <button onClick={generateData}>点击产生数据</button>
      <AceList
        dataSource={data}
        rowRenderer={renderRow}
        height={500}
        rowHeight={50}
      />
    </div>
  )
}

export default App
