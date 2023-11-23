import { observable, runInAction } from 'mobx'
import { MessageType } from '../..'

export const inputValue = observable.box<string>('')

export const messages = observable.box<MessageType[]>([])

export const changeInputValue = (value: string) => {
  runInAction(() => {
    inputValue.set(value)
  })
}

export const changeMessages = (message: MessageType) => {
  runInAction(() => {
    messages.set([...messages.get(), message])
  })
}
