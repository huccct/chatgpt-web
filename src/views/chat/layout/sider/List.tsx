import { Menu, MenuProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { items } from './model'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
const List: React.FC = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const [current, setCurrent] = useState<string>(location.state)
  useEffect(() => {
    setCurrent(location.state)
  }, [location.state])
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)

    navigate(`/generate/chat/${e.key}`, {
      state: e.key
    })
  }
  return (
    <>
      <Menu
        onClick={onClick}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[current]}
        selectedKeys={[current]}
        items={items.get()}
        className="px-[10px] mt-[20px] bg-black"
      />
    </>
  )
})
export default List
