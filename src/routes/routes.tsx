import ChatLayout from '@/views/chat/layout'
import HomeLayout from '@/views/home/layout'
import MessageList from '@/views/chat/layout/content/message-list'

export const constantRoute = [
  {
    path: '/',
    element: <HomeLayout />
  },
  {
    path: '/generate',
    element: <ChatLayout />,
    children: [
      {
        path: 'chat/:id',
        element: <MessageList />
      }
    ]
  }
]
