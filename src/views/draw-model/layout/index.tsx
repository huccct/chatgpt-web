import React from 'react'
import { observer } from 'mobx-react-lite'

const index: React.FC = observer(() => {
  return (
    <div
      className="w-[400px] h-[400px] bg-[#ccc] flex items-center
    justify-center mx-auto"
    >
      models
    </div>
  )
})

export default index
