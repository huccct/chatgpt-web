import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ConfigProvider } from 'antd'
function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultBg: '#202123',
              colorPrimaryHover: 'none',
              colorPrimaryActive: 'none'
            },
            Menu: {
              darkItemSelectedBg: '#202123',
              darkItemHoverBg: '#202123'
            },
            Input: {
              activeBorderColor: '#fff',
              hoverBg: '#fff',
              hoverBorderColor: 'none'
            },
            Card: {
              actionsBg: '#1a1b1e'
            }
          }
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  )
}

export default App
