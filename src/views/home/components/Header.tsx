import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = observer(() => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="w-full h-[60px] bg-black flex items-center text-white"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
        }}
      >
        {/* logo */}
        <div>12312</div>
        {/* generate button */}
        <Button
          type="primary"
          onClick={() => {
            navigate('/generate')
          }}
        >
          去生图吧~
        </Button>
      </div>
    </>
  )
})

export default Header
