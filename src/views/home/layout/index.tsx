import React from 'react'
import { observer } from 'mobx-react-lite'
import Header from '../components/Header'
import WaterFall from '../components/WaterFall'
import SideBar from '../components/SiderBar'

const index: React.FC = observer(() => {
  return (
    <>
      <Header />
      <SideBar />
      <WaterFall />
    </>
  )
})

export default index
