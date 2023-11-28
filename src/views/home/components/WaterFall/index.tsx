import { CommentOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import { Avatar, Card, FloatButton } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { waterfallList } from './model'

const { Meta } = Card

const index: React.FC = observer(() => {
  return (
    <>
      <div
        className="pl-[160px] pr-[100px] py-[80px]"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }}
      >
        {waterfallList.get().map((item) => {
          return (
            <Card
              key={item.title}
              hoverable
              style={{ width: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              actions={[
                <LikeOutlined
                  key="like"
                  style={{ color: '#fff', fontSize: '16px' }}
                />,
                <CommentOutlined
                  key="comment"
                  style={{ color: '#fff', fontSize: '16px' }}
                />,
                <StarOutlined
                  key="collect"
                  style={{ color: '#fff', fontSize: '16px' }}
                />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title={<span className="text-white">{item.title}</span>}
                description={<span className="text-white">{item.desc}</span>}
              />
            </Card>
          )
        })}
      </div>
      <FloatButton.BackTop />
    </>
  )
})

export default index
