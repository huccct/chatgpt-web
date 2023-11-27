import { observer } from 'mobx-react-lite'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SiderBar'

const index: React.FC = observer(() => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  )
})

export default index
