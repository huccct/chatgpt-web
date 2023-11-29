import { MessageOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Layout, Row, theme } from 'antd'
import React from 'react'

import { observer } from 'mobx-react-lite'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import MessageContent from '../components/content'
import { changeMessagesId } from '../components/content/model'
import List from '../components/sider/List'
import { getItem, handleAddChat } from '../components/sider/model'
import Footer from '../components/sider/Footer'
const { Sider, Content } = Layout

export interface MessageType {
  id: number
  content: string
  isUser: boolean
  avatar: string
  nickname: string
}

const index: React.FC = observer(() => {
  const navigate = useNavigate()
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        width={260}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: '#000'
        }}
      >
        <Row justify="center" className="mt-[20px]">
          <Button
            icon={<PlusOutlined style={{ color: '#fff' }} />}
            className="w-11/12 border-none bg-[#40414f]"
            size="large"
            onClick={() => {
              const id = nanoid()
              handleAddChat(getItem('New Chat', id, <MessageOutlined />))
              changeMessagesId(id)
              // navigate to chat page
              navigate('/generate/chat/' + id, {
                state: id
              })
            }}
          >
            {<span className="text-white">新的聊天</span>}
          </Button>
          <List />
          <Footer />
        </Row>
      </Sider>
      <Layout style={{ marginLeft: 260 }}>
        <Content
          style={{
            minHeight: '90vh',
            height: '90%',
            background: '#343541'
            // paddingTop: 56
          }}
        >
          <MessageContent />
        </Content>
      </Layout>
    </Layout>
  )
})

export default index
