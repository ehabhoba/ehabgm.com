
"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/lib/supabase"

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [userId, setUserId] = useState("")
  const [messages, setMessages] = useState<any[]>([
    {
      type: "bot",
      content: "مرحباً! أنا مساعدك الذكي في ehabgm. كيف يمكنني مساعدتك اليوم؟",
      time: new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize User ID and Load History
  useEffect(() => {
    let id = localStorage.getItem("ehabgm_chat_user_id")
    if (!id) {
      id = "user_" + Math.random().toString(36).substr(2, 9)
      localStorage.setItem("ehabgm_chat_user_id", id)
    }
    setUserId(id)

    const loadHistory = async () => {
      try {
        const { data, error } = await supabase
          .from("messages")
          .select("*")
          .eq("user_id", id)
          .order("created_at", { ascending: true })

        if (data && data.length > 0) {
          const loadedMessages = data.map((msg) => ({
            type: msg.sender,
            content: msg.content,
            time: new Date(msg.created_at).toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
          }))
          // Optionally prepend default welcome message if needed, or structured differently
          setMessages((prev) => {
            // keep the welcome message if history is empty, otherwise replace or append? 
            // usually we just show history. Let's append history to the default welcome or just show history
            // If history exists, we probably don't need the default welcome message repeated every reload if we want a clean state, 
            // but for now, let's just use the history if it exists + default welcome at top if desired. 
            // Simple approach: Use history, if empty use default.
            return loadedMessages.length > 0 ? loadedMessages : prev
          })
        }
      } catch (e) {
        console.error("Error loading history:", e)
      }
    }

    loadHistory()
  }, [])

  const quickReplies = [
    "أريد موقع إلكتروني",
    "خدمات السوشيال ميديا",
    "الأسعار والباقات",
    "استشارة مجانية",
    "أمثلة على أعمالكم",
  ]

  const getBotResponse = async (userMessage: string) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
          userId: userId, // Send User ID for persistence
        }),
      })

      const data = await response.json()
      return data.response
    } catch (error) {
      console.error("[v0] Error in chat:", error)
      return "عذراً، حدث خطأ مؤقت. يمكنك التواصل معنا مباشرة عبر الواتساب على 01012345678 أو عبر نموذج التواصل."
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      type: "user" as const,
      content: inputMessage,
      time: new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")
    setIsTyping(true)

    const botResponseText = await getBotResponse(inputMessage)

    const botResponse = {
      type: "bot" as const,
      content: botResponseText,
      time: new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, botResponse])
    setIsTyping(false)
  }

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
    setTimeout(() => handleSendMessage(), 100)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-24 right-6 z-50 print:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl transition-transform hover:scale-105"
          aria-label="فتح المساعد الذكي"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-44 right-6 w-96 h-[500px] z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 print:hidden max-w-[calc(100vw-3rem)]">
          <Card className="h-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl flex flex-col overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
              <CardTitle className="flex items-center justify-between text-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold text-sm">مساعد ehabgm</span>
                    <span className="text-[10px] text-white/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      متاح (Online)
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 h-8 w-8 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden bg-gray-50/50">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm ${message.type === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                        }`}
                    >
                      <p className="whitespace-pre-line leading-relaxed">{message.content}</p>
                      <p className={`text-[10px] mt-1 text-right ${message.type === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>{message.time}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="px-4 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide bg-white/50 border-t border-gray-100">
                <div className="flex gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 bg-white border border-blue-100 text-blue-600 text-xs rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm whitespace-nowrap"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-3 bg-white border-t border-gray-100">
                <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-200 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="اكتب رسالتك..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-3 h-9 text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className={`h-8 w-8 rounded-full shrink-0 transition-all ${inputMessage.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 hover:bg-gray-400'}`}
                    disabled={!inputMessage.trim()}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(-45deg)', marginLeft: '-2px' }}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
