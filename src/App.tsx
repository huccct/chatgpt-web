import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ConfigProvider } from 'antd'
function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#202123',
            colorBgContainer: '#343541'
          },
          components: {
            Menu: {
              darkItemSelectedBg: '#202123',
              darkItemHoverBg: '#202123'
            },
            Input: {
              activeBorderColor: '#fff',
              hoverBg: '#fff',
              hoverBorderColor: '#fff'
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
