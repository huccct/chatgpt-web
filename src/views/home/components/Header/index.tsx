import SvgIcon from '@/components/SvgIcon'
import Login from '@/views/login/layout'
import {
  BellOutlined,
  PlusCircleOutlined,
  SearchOutlined
} from '@ant-design/icons'
import { Button, Input, Popover, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toggleModal } from './model'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

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
        <Space>
          <SvgIcon
            name={'logo'}
            width={'50px'}
            height={'50px'}
            color={'black'}
          />
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=24&pause=1000&color=F7F7F7&center=true&vCenter=true&random=false&width=150&height=60&lines=Maverick"
              alt="Typing SVG"
            />
          </a>
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
          <Popover
            placement="bottomRight"
            content={content}
            title="Title"
            trigger="click"
          >
            <BellOutlined style={{ fontSize: '20px' }} />
          </Popover>

          <div
            onClick={() => {
              toggleModal()
            }}
            className="hover:cursor-pointer"
          >
            <div className="w-[40px] h-[40px] bg-white rounded-full" />
          </div>
          <Login />
        </Space>
      </div>
    </>
  )
})

export default Header
