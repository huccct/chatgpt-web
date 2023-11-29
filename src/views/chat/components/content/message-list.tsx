import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MessageType } from '../../layout'
import { initMessages, messageStore } from './model'

const MessageList: React.FC = observer(() => {
  const { id } = useParams()
  const [messages, setMessages] = useState<MessageType[]>([])
  useEffect(() => {
    initMessages()
    setMessages(messageStore.get().messagesByMessageId.get(id ?? '') || [])
  }, [id])

  return (
    <div className="mx-auto w-[720px] pb-[100px] pt-[20px]">
      {messages.map((message: MessageType) => (
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
