import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Form, Input, Modal, Space } from 'antd'
import { isModalOpen, toggleModal } from '@/views/home/components/Header/model'
import { reqLogin } from '@/api/user'

const index: React.FC = observer(() => {
  const handleOk = () => {
    toggleModal()
  }

  const handleCancel = () => {
    toggleModal()
  }

  const onFinish = async (values: any) => {
    try {
      const res = await reqLogin({ ...values })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  type FieldType = {
    username?: string
    password?: string
  }
  return (
    <Modal
      title="登录"
      open={isModalOpen.get()}
      onCancel={handleCancel}
      footer={[]}
    >
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className="hover:border-solid" allowClear />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password allowClear />
        </Form.Item>
        <Form.Item className="text-center" wrapperCol={{ offset: 8, span: 8 }}>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#ccc]"
              onClick={() => {
                toggleModal()
              }}
            >
              取消
            </Button>
            <Button type="primary" htmlType="submit" className="bg-black">
              登录
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
})

export default index
