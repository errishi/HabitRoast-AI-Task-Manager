"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboard, ListTodo, BarChart3, Zap, Settings } from "lucide-react"
import Image from "next/image"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const data = {
    user: {
      name: "Rishi",
      email: "rishi@example.com",
      avatar: "",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboard />,
        isActive: pathname === "/dashboard",
      },
      {
        title: "Tasks",
        url: "/tasks",
        icon: <ListTodo />,
        isActive: pathname.startsWith("/tasks"),
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: <BarChart3 />,
        isActive: pathname.startsWith("/analytics"),
      },
      {
        title: "AI Roasts",
        url: "/roasts",
        icon: <Zap />,
        isActive: pathname.startsWith("/roasts"),
      },
      {
        title: "Settings",
        url: "/settings",
        icon: <Settings />,
        isActive: pathname.startsWith("/settings"),
      },
    ],
  }

  return (
    <Sidebar variant="inset" className="border-r border-white/[0.06] !bg-[#0a0a0a]" {...props}>
      <SidebarHeader className="bg-[#0a0a0a]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="/dashboard" />}>
              <div className="flex aspect-square size-8 items-center justify-center text-white drop-shadow-lg drop-shadow-red-500/20">
                <Image
                  src="/icon.svg"
                  width={100}
                  height={50}
                  className="h-fit w-auto"
                  alt="habitroast logo"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight text-white">
                <span className="truncate font-bold text-base">HabitRoast</span>
                <span className="truncate text-xs opacity-50">AI Task Manager</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#0a0a0a]">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-[#0a0a0a]">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
