import ChatLayout from '@/views/chat/layout'
import HomeLayout from '@/views/home/layout'
import MessageList from '@/views/chat/components/content/message-list'
import WaterFallList from '@/views/home/components/WaterFall'
import GenerationLayout from '@/views/generation/layout'
import RankingLayout from '@/views/ranking/layout'
import ModelsLayout from '@/views/draw-model/layout'

export const constantRoute = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <WaterFallList />
      },
      {
        path: 'generation',
        element: <GenerationLayout />
      },
      {
        path: 'ranking',
        element: <RankingLayout />
      },
      {
        path: 'models',
        element: <ModelsLayout />
      }
    ]
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
