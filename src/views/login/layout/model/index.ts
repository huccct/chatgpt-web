import { observable } from 'mobx'

export const username = observable.box<string>('')

export const password = observable.box<string>('')
