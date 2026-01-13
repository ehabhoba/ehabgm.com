
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Send, User } from "lucide-react"

export default function AdminChatPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)

  // Mock Data - To be replaced with Supabase Realtime
  const conversations = [
    { id: 1, user: "أحمد محمد", lastMessage: "تفاصيل باقة 4000 جنيه؟", time: "10:30 AM", unread: 2 },
    { id: 2, user: "Sarah Ahmed", lastMessage: "Thanks for the info", time: "Yesterday", unread: 0 },
    { id: 3, user: "مكتب المحاماة", lastMessage: "هل متاح تصميم لوجو؟", time: "Yesterday", unread: 0 },
  ]

  const messages = [
    { id: 1, sender: "user", text: "السلام عليكم", time: "10:00 AM" },
    { id: 2, sender: "bot", text: "وعليكم السلام! كيف يمكنني مساعدتك؟", time: "10:00 AM" },
    { id: 3, sender: "user", text: "كنت عايز اعرف تفاصيل باقة تصميم المواقع اللي ب 4000؟", time: "10:05 AM" },
  ]

  return (
    <div className="h-[calc(100vh-100px)] flex gap-4">
      {/* Sidebar List */}
      <Card className="w-1/3 flex flex-col">
        <CardHeader className="p-4 border-b">
          <div className="relative">
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="بحث في المحادثات..." className="pr-9" />
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-0">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 flex items-center justify-between transition-colors ${selectedChat === chat.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{chat.user}</h3>
                  <p className="text-xs text-muted-foreground truncate w-40">{chat.lastMessage}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">{chat.time}</p>
                {chat.unread > 0 && (
                  <span className="inline-block bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full mt-1">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <CardHeader className="p-4 border-b flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">A</span>
                </div>
                <div>
                  <CardTitle className="text-base">أحمد محمد</CardTitle>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    نشط الآن
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">إغلاق المحادثة</Button>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${msg.sender === "user"
                        ? "bg-white border text-gray-800"
                        : "bg-blue-600 text-white"
                      }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-[10px] mt-1 ${msg.sender === "user" ? "text-gray-400" : "text-blue-100"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>

            <div className="p-4 border-t bg-white">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="اكتب ردك هنا..." />
                <Button type="submit" size="icon" className="shrink-0 bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <MessageSquare className="w-16 h-16 mb-4 opacity-20" />
            <p>اختر محادثة للبدء</p>
          </div>
        )}
      </Card>
    </div>
  )
}
