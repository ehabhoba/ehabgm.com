
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Eye, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
    const stats = [
        {
            title: "إجمالي الزوار",
            value: "12,345",
            change: "+12%",
            icon: <Eye className="w-5 h-5 text-blue-600" />,
            color: "bg-blue-100"
        },
        {
            title: "المحادثات النشطة",
            value: "8",
            change: "+2",
            icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
            color: "bg-purple-100"
        },
        {
            title: "العملاء الجدد",
            value: "145",
            change: "+18%",
            icon: <Users className="w-5 h-5 text-green-600" />,
            color: "bg-green-100"
        },
        {
            title: "معدل التحويل",
            value: "3.2%",
            change: "+0.4%",
            icon: <TrendingUp className="w-5 h-5 text-orange-600" />,
            color: "bg-orange-100"
        }
    ]

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">لوحة التحكم</h2>
                <p className="text-muted-foreground">مرحباً بك في لوحة تحكم EhabGM</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <div className={`p-2 rounded-full ${stat.color}`}>
                                {stat.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                <span className="text-green-500 font-medium">{stat.change}</span> مقارنة بالشهر الماضي
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>نظرة عامة</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground bg-gray-50 rounded-md border border-dashed">
                            مساحة للرسم البياني (Chart Area)
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>أحدث النشاطات</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">زائر جديد من الجيزة</p>
                                        <p className="text-xs text-muted-foreground">منذ 5 دقائق</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
