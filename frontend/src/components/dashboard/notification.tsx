import React from 'react'
import { Button } from "@/components/ui/button";
import { Bell } from 'lucide-react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverDescription,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const notifications = [
    { id: 1, text: "\"Finish project proposal\" is 2 hours overdue!", time: "2h ago", type: "overdue" as const },
    { id: 2, text: "New AI roast generated for your task list", time: "30m ago", type: "roast" as const },
    { id: 3, text: "You're on a 7-day streak! 🔥", time: "1h ago", type: "achievement" as const },
];

const Notification = () => {
    return (
        <Popover>
            <PopoverTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative rounded-xl border border-white/6 bg-white/3 text-white/50 hover:border-white/10 hover:bg-white/6 hover:text-white"
                        id="dashboard-notifications"
                    />
                }
            >
                <Bell className="size-4" />
                <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow-lg shadow-red-500/40">
                    {notifications.length}
                </span>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-80 bg-[#141414] border-white/10 p-0">
                <PopoverHeader className="px-4 pt-4 pb-2">
                    <PopoverTitle className="text-white text-sm">Notifications</PopoverTitle>
                    <PopoverDescription className="text-white/40 text-xs">
                        You have {notifications.length} unread notifications
                    </PopoverDescription>
                </PopoverHeader>
                <Separator className="bg-white/6" />
                <div className="flex flex-col py-1">
                    {notifications.map((notif) => (
                        <button
                            key={notif.id}
                            className="flex items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-white/4"
                        >
                            <div className={`mt-0.5 size-2 shrink-0 rounded-full ${notif.type === "overdue" ? "bg-red-500" :
                                notif.type === "roast" ? "bg-orange-500" :
                                    "bg-emerald-500"
                                }`} />
                            <div className="min-w-0 flex-1">
                                <p className="text-xs text-white/70 leading-relaxed">{notif.text}</p>
                                <p className="mt-0.5 text-[10px] text-white/25">{notif.time}</p>
                            </div>
                        </button>
                    ))}
                </div>
                <Separator className="bg-white/6" />
                <div className="px-4 py-2">
                    <Button variant="ghost" size="xs" className="w-full text-white/40 hover:text-white/70">
                        View all notifications
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Notification