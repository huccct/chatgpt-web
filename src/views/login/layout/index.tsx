import React from 'react'
import { observer } from 'mobx-react-lite'
import { Modal } from 'antd'
import { isModalOpen, toggleModal } from '@/views/home/components/Header/model'

const index: React.FC = observer(() => {
  const handleOk = () => {
    toggleModal()
  }

  const handleCancel = () => {
    toggleModal()
  }
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen.get()}
      onCancel={handleCancel}
      footer={[]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
})

export default index
