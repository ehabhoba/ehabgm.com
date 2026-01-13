
import type { Metadata } from "next"
import Link from "next/link"
import { BarChart, Home, MessageSquare, Settings, Users, FileText } from "lucide-react"

export const metadata: Metadata = {
    title: "Admin Dashboard | EhabGM",
    description: "Management dashboard for EhabGM website",
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        EhabGM
                    </h1>
                    <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Home className="w-5 h-5" />
                        <span>الرئيسية</span>
                    </Link>
                    <Link href="/admin/chat" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        <span>المحادثات</span>
                    </Link>
                    <Link href="/admin/posts" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <FileText className="w-5 h-5" />
                        <span>المقالات</span>
                    </Link>
                    <Link href="/admin/leads" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Users className="w-5 h-5" />
                        <span>العملاء</span>
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Settings className="w-5 h-5" />
                        <span>الإعدادات</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 px-4 py-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            A
                        </div>
                        <div>
                            <p className="text-sm font-medium">Admin</p>
                            <p className="text-xs text-gray-500">online</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
            </main>
        </div>
    )
}
