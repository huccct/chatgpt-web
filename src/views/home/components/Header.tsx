import SvgIcon from '@/components/SvgIcon'
import {
  BellOutlined,
  PlusCircleOutlined,
  SearchOutlined
} from '@ant-design/icons'
import { Button, Input, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = observer(() => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="fixed w-full h-[60px] text-white bg-black flex items-center justify-between px-[40px] z-[999] overflow-hidden"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
        }}
      >
        {/* logo */}
        <Space size={100}>
          <SvgIcon
            name={'logo'}
            width={'50px'}
            height={'50px'}
            color={'black'}
          />
          {/* search */}
          <Input
            addonBefore={<SearchOutlined style={{ color: '#fff' }} />}
            className="w-[350px]"
            allowClear
          />
        </Space>
        {/* generate button */}
        <Space size={30}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined style={{ color: '#fff' }} />}
            onClick={() => {
              navigate('/generate')
            }}
            className="border-none bg-[#40414f]"
          >
            <span className="font-bold">去生图吧~</span>
          </Button>
          <BellOutlined style={{ fontSize: '20px' }} />
          <div>
            <div className="w-[40px] h-[40px] bg-white rounded-full"></div>
          </div>
        </Space>
      </div>
    </>
  )
})

export default Header
