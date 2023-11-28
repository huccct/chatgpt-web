import { observable, runInAction } from 'mobx'

export const isModalOpen = observable.box<boolean>(false)

export const toggleModal = () => {
  runInAction(() => {
    isModalOpen.set(!isModalOpen.get())
  })
}
