import React from 'react'
import { MessageType } from '..'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { messages } from './model'

const MessageList: React.FC = observer(() => {
  const { id } = useParams()
  console.log(id)

  return (
    <div className="mx-auto w-[720px] pb-[100px] pt-[20px]">
      {messages.get().map((message: MessageType) => (
        <div key={message.id} className="my-[35px] mx-[20px]">
          <div className="flex items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#ccc] mr-[10px]">
              {message.avatar}
            </div>
            <div>
              <span className="mr-[5px] font-bold text-white">
                {message.nickname}
              </span>
            </div>
          </div>
          <div className="ml-[50px]">
            <span className="text-white">{message.content}</span>
          </div>
        </div>
      ))}
    </div>
  )
})

export default MessageList
