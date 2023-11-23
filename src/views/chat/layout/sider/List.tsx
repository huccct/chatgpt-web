import { Menu, MenuProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { items } from './model'
import './css/index.css'
import { useLocation, useNavigate } from 'react-router-dom'
const List: React.FC = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/chat/${e.key}`)
  }
  return (
    <>
      <Menu
        onClick={onClick}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.state]}
        items={items.get()}
        className="px-[10px] mt-[20px] bg-black"
      />
    </>
  )
})
export default List
