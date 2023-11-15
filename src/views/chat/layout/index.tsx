import React, { useRef, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { Layout, Menu, Button, theme, Row, Input, Col } from 'antd'

const { TextArea } = Input
const { Header, Sider, Content } = Layout

const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: '100vh', background: '#202123' }}
      >
        <Row justify="center" className="mt-[20px]">
          <Button
            icon={<PlusOutlined style={{ color: '#fff' }} />}
            className="w-11/12 border-none bg-[#40414f]"
            size="large"
          >
            {!collapsed && <span className="text-white">新的聊天</span>}
          </Button>
        </Row>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Content
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer
          }}
        >
          <TextArea autoSize bordered={false} readOnly />

          <Row className="fixed bottom-[40px] min-w-[50%] leading-[56px] h-[56px]">
            <TextArea
              placeholder="请输入你想发送的内容..."
              className="rounded-[15px] text-18px"
              style={{
                boxShadow:
                  '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
                resize: 'none'
              }}
              bordered={false}
            />
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}
export default Index
