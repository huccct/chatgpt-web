import { SendOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { changeInputValue, changeMessages, inputValue, messages } from './model'
const { TextArea } = Input
const MessageInput: React.FC = observer(() => {
  const handleInputChange = (event: any) => {
    changeInputValue(event.target.value)
  }

  const handleSendMessage = () => {
    if (inputValue.get().trim() !== '') {
      const userMessage = {
        id: messages.get().length + 1,
        content: inputValue.get(),
        isUser: true,
        avatar: '',
        nickname: 'You'
      }

      changeMessages(userMessage)
      changeInputValue('')

      // 模拟回复
      setTimeout(() => {
        const botMessage = {
          id: messages.get().length + 2,
          content: '这是一个自动回复',
          isUser: false,
          avatar: '',
          nickname: 'Assistant'
        }
        changeMessages(botMessage)
      }, 1000)
    }
  }
  return (
    <div
      className="fixed pb-[50px] bottom-0 flex justify-center z-99 bg-[#343541]"
      style={{ width: `calc(100% - 260px)` }}
    >
      <Row className="mx-auto w-[720px]" align="middle" gutter={16}>
        <Col span={22}>
          <TextArea
            id="textArea"
            placeholder="请输入你想发送的内容..."
            className="rounded-[15px] text-[14px] text-white"
            style={{
              boxShadow:
                '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
              resize: 'none',
              backgroundColor: '#40414f'
            }}
            bordered={false}
            value={inputValue.get()}
            onChange={handleInputChange}
          />
        </Col>
        <Col span={2}>
          <Button
            icon={<SendOutlined style={{ color: '#fff' }} />}
            className="border-none bg-[#40414f]"
            size="large"
            onClick={handleSendMessage}
          />
        </Col>
      </Row>
    </div>
  )
})

export default MessageInput
