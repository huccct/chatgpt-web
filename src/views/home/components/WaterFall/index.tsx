import React from 'react'
import { observer } from 'mobx-react-lite'
import { Card, FloatButton } from 'antd'
import { waterfallList } from './model'
import '../../css/index.css'

const { Meta } = Card

const index: React.FC = observer(() => {
  return (
    <>
      <div
        className="px-[150px] py-[80px]"
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
            >
              <Meta title={item.title} description={item.desc} />
            </Card>
          )
        })}
      </div>
      <FloatButton.BackTop />
    </>
  )
})

export default index
