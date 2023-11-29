import { observable, runInAction } from 'mobx'
import { MessageType } from '../../../layout'

export const inputValue = observable.box<string>('')

export const messages = observable.box<MessageType[]>([])

export const messagesId = observable.box<string>('')

export const messageStore = observable.box({
  messagesByMessageId: observable.map<string, MessageType[]>()
})

export const changeInputValue = (value: string) => {
  runInAction(() => {
    inputValue.set(value)
  })
}

export const changeMessages = (message: MessageType) => {
  runInAction(() => {
    initMessages()
    messageStore.get().messagesByMessageId.get(messagesId.get())?.push(message)
  })
}

export const changeMessagesId = (id: string) => {
  runInAction(() => {
    messagesId.set(id)
  })
}

export const initMessages = () => {
  runInAction(() => {
    if (!messageStore.get().messagesByMessageId.has(messagesId.get())) {
      messageStore.get().messagesByMessageId.set(messagesId.get(), [])
    }
  })
}
