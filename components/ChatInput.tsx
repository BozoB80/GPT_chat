'use client'

import { useState } from "react"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useSession } from 'next-auth/react';

type Props = {
  chatId: string
}

const ChatInput = ({chatId}: Props) => {
  const [prompt, setPrompt] = useState('')
  const { data: session } = useSession()

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex">
        <input 
          type="text"
          disabled={!session}
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Type your message here..."
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
        />
        <button 
          disabled={!prompt || !session}
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>

      </div>
    </div>
  )
}

export default ChatInput
