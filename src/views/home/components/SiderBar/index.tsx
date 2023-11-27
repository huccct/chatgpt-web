import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Space } from 'antd'
import {
  BgColorsOutlined,
  HighlightOutlined,
  HomeOutlined,
  LineChartOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const index: React.FC = observer(() => {
  const [selectedTab, setSelectedTab] = useState(0)

  const navigate = useNavigate()
  const handlerClick = (idx: number) => {
    setSelectedTab(idx)
  }
  return (
    <div className="fixed left-0 h-[100%] w-[100px] bg-black">
      <div className="flex items-center justify-center h-full">
        <Space size={30} direction="vertical" align="center">
          <div
            className={`${selectedTab === 0 ? 'highlight' : 'normal'}`}
            onClick={() => {
              handlerClick(0)
              navigate('/')
            }}
          >
            <HomeOutlined style={{ color: '#fff', fontSize: '30px' }} />
            <p style={{ color: '#fff', marginTop: '10px' }}>首页</p>
          </div>
          <div
            className={`${selectedTab === 1 ? 'highlight' : 'normal'}`}
            onClick={() => {
              handlerClick(1)
              navigate('/generation')
            }}
          >
            <BgColorsOutlined style={{ color: '#fff', fontSize: '30px' }} />
            <p style={{ color: '#fff', marginTop: '10px' }}>生图</p>
          </div>
          <div
            className={`${selectedTab === 2 ? 'highlight' : 'normal'}`}
            onClick={() => {
              handlerClick(2)
              navigate('/ranking')
            }}
          >
            <LineChartOutlined style={{ color: '#fff', fontSize: '30px' }} />
            <p style={{ color: '#fff', marginTop: '10px' }}>排名</p>
          </div>
          <div
            className={`${selectedTab === 3 ? 'highlight' : 'normal'}`}
            onClick={() => {
              handlerClick(3)
              navigate('/models')
            }}
          >
            <HighlightOutlined style={{ color: '#fff', fontSize: '30px' }} />
            <p style={{ color: '#fff', marginTop: '10px' }}>模型</p>
          </div>
        </Space>
      </div>
    </div>
  )
})

export default index
