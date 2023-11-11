import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/views/chat/layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  }
])

export default router
