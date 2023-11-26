import React from 'react'
import { observer } from 'mobx-react-lite'
import { Space } from 'antd'
import {
  BgColorsOutlined,
  HighlightOutlined,
  HomeOutlined,
  LineChartOutlined
} from '@ant-design/icons'

const index: React.FC = observer(() => {
  return (
    <div className="fixed left-0 h-[100%] w-[100px] bg-black">
      <div className="flex items-center justify-center h-full">
        <Space size={40} direction="vertical" align="center">
          <div>
            <HomeOutlined style={{ color: '#fff', fontSize: '30px' }} />
            <p style={{ color: '#fff', marginTop: '10px' }}>首页</p>
          </div>
          <div>
            <BgColorsOutlined style={{ color: '#fff', fontSize: '30px' }} />
            <p style={{ color: '#fff', marginTop: '10px' }}>生图</p>
          </div>
          <div>
            <LineChartOutlined style={{ color: '#fff', fontSize: '30px' }} />
            <p style={{ color: '#fff', marginTop: '10px' }}>排名</p>
          </div>
          <div>
            <HighlightOutlined style={{ color: '#fff', fontSize: '30px' }} />
            <p style={{ color: '#fff', marginTop: '10px' }}>模型</p>
          </div>
        </Space>
      </div>
    </div>
  )
})

export default index
