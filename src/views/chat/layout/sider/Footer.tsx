import React, { useMemo, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Popover } from 'antd'
import { LeftCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './css/index.css'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const Footer: React.FC = observer(() => {
  const navigate = useNavigate()

  return (
    <div className="fixed h-[130px] w-[260px] bottom-0 left-0 right-0 z-2 text-white bg-black text-center overflow-hidden">
      <div>
        <Button
          icon={<LeftCircleOutlined style={{ color: '#fff' }} />}
          className="w-11/12 border-none bg-[#40414f]"
          size="large"
          onClick={() => {
            navigate('/')
          }}
        >
          <span className="text-white">Back to Home</span>
        </Button>
      </div>
      <br />
      <br />

      <Popover
        content={content}
        title="Title"
        trigger="click"
        placement="top"
        arrow={false}
      >
        <div className="flex items-center px-[15px]">
          {/* avatar */}
          <div className="w-[35px] h-[35px] rounded-full bg-white"></div>
          {/* username */}

          <Button className="ml-[5px] border-none">
            <span className="text-white">Orion Chen</span>
          </Button>
        </div>
      </Popover>
    </div>
  )
})

export default Footer
