import { observer } from 'mobx-react-lite'
import React from 'react'
import { Outlet } from 'react-router-dom'
import MessageInput from './message-input'

const index: React.FC = observer(() => {
  return (
    <>
      <Outlet />
      <MessageInput />
    </>
  )
})

export default index
