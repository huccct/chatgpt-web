import Layout from '@/views/chat/layout'
import MessageList from '@/views/chat/layout/content/message-list'

export const constantRoute = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/chat/:id',
        element: <MessageList />
      }
    ]
  }
]
