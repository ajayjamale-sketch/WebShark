import { useState, useRef, useEffect } from 'react'
import { Bot, SendHorizonal, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'How can I help you today?',
    },
  ])

  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = () => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: message,
    }

    const botMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      text: 'WebShark AI analyzed your request.',
    }

    setMessages((prev) => [...prev, userMessage, botMessage])
    setMessage('')
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className='fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue text-white shadow-lg'
      >
        {open ? <X size={22} /> : <Bot size={22} />}
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className='fixed bottom-24 right-6 z-50 flex h-[500px] w-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl'
          >
            {/* Header */}
            <div className='flex items-center justify-between border-b border-border px-4 py-3'>
              <div className='flex items-center gap-2'>
                <Bot className='text-primary-blue' size={20} />
                <h2 className='text-sm font-semibold'>WebShark AI</h2>
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className='flex-1 space-y-3 overflow-y-auto p-4'
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'assistant'
                      ? 'bg-muted text-foreground'
                      : 'ml-auto bg-primary-blue text-white'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className='border-t border-border p-3'>
              <div className='flex items-center gap-2'>
                <input
                  type='text'
                  value={message}
                  placeholder='Type a message...'
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className='flex-1 rounded-xl border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary-blue'
                />

                <button
                  onClick={sendMessage}
                  className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue text-white'
                >
                  <SendHorizonal size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}