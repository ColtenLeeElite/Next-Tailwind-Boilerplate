import { FC, useEffect, useState } from 'react'
import ChatItem from './ChatItem'
import { useChatStore } from '@/common/stores/chatStore'
import api from '@/api'
import { useUserStore } from '@/common/stores/userStore'

const ChatsPanel: FC = () => {
  const [chats, setChats] = useChatStore((state) => [
    state.chats,
    state.setChats,
  ])
  const [userId] = useUserStore((state) => [state.user?.id])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setChats([])
    api.chats.getChatsByOwner(userId!).then((response) => {
      setChats(response)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-black rounded-xl">
      <h3 className="px-6 py-2 text-sm font-bold text-gray-50">My Chats</h3>
      <div className="h-[150px] overflow-scroll scrollbar-hide">
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            id={chat.id}
            text={chat.name}
            messages={chat.messages.length}
          />
        ))}
      </div>
    </div>
  )
}

export default ChatsPanel
