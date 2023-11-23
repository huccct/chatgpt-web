import { MessageOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { observable, runInAction } from 'mobx'

type MenuItem = Required<MenuProps>['items'][number]

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

export const items = observable.box<MenuItem[]>([])

/**
 * @description 新增聊天
 */
// TODO: 新增聊天 往items里面push一个新的聊天

export const handleAddChat = (
  item: MenuItem = getItem('New Chat', '1', <MessageOutlined />)
) => {
  runInAction(() => {
    items.set([...items.get(), item])
    console.log(items.get())
  })
}
