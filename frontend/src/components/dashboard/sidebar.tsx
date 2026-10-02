"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ListTodo,
  BarChart3,
  Flame,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Zap,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Tasks", href: "/dashboard/tasks", icon: ListTodo },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "AI Roasts", href: "/dashboard/roasts", icon: Zap },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 rounded-xl border border-white/8 bg-black/80 text-white/70 backdrop-blur-xl hover:bg-white/10 hover:text-white lg:hidden"
        id="sidebar-mobile-toggle"
      >
        <Menu className="size-5" />
      </Button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 72 : 260 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`
          glass-sidebar relative z-50 flex h-screen flex-col border-r border-white/[0.06]
          ${mobileOpen ? "fixed inset-y-0 left-0" : "hidden lg:flex"}
        `}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/dashboard" className="flex items-center gap-2.5 overflow-hidden" id="sidebar-logo">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-flame shadow-lg shadow-red-500/20">
              <Flame className="size-4.5 text-white" />
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-base font-bold text-white whitespace-nowrap"
                >
                  HabitRoast
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Mobile Close */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setMobileOpen(false)}
            className="text-white/50 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X className="size-4" />
          </Button>
        </div>

        <Separator className="bg-white/[0.06]" />

        {/* Navigation */}
        <nav className="mt-4 flex flex-1 flex-col gap-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
            const Icon = item.icon;

            const navLink = (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                id={`sidebar-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`
                  group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200
                  ${isActive
                    ? "bg-white/[0.08] text-white shadow-sm"
                    : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"
                  }
                `}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 via-transparent to-transparent"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-gradient-flame"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}

                <Icon className={`size-[18px] shrink-0 relative z-10 ${isActive ? "text-red-400" : ""}`} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="relative z-10 whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );

            // Wrap in Tooltip when collapsed
            if (collapsed) {
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger render={navLink} />
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              );
            }

            return navLink;
          })}
        </nav>

        {/* Collapse Toggle (desktop only) */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCollapsed(!collapsed)}
                className="mx-3 mb-2 hidden justify-center text-white/30 hover:bg-white/[0.04] hover:text-white/60 lg:flex"
                id="sidebar-collapse-toggle"
              />
            }
          >
            {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
          </TooltipTrigger>
          <TooltipContent side="right">
            {collapsed ? "Expand" : "Collapse"}
          </TooltipContent>
        </Tooltip>

        <Separator className="bg-white/[0.06]" />

        {/* User Section with DropdownMenu */}
        <div className="px-3 py-3">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-white/[0.04]">
                  <Avatar size="sm">
                    <AvatarFallback className="bg-gradient-to-br from-red-500/30 to-orange-500/30 text-white/70 text-xs">
                      R
                    </AvatarFallback>
                  </Avatar>
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="min-w-0 flex-1 text-left"
                      >
                        <p className="truncate text-sm font-medium text-white/80">Rishi</p>
                        <p className="truncate text-xs text-white/30">rishi@example.com</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              }
            />
            <DropdownMenuContent side="top" align="start" className="w-56 bg-[#141414] border-white/10">
              <DropdownMenuLabel className="text-white/50">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/[0.06]" />
              <DropdownMenuItem className="text-white/70 focus:bg-white/[0.06] focus:text-white">
                <User className="size-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white/70 focus:bg-white/[0.06] focus:text-white">
                <Settings className="size-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/[0.06]" />
              <DropdownMenuItem variant="destructive">
                <LogOut className="size-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.aside>
    </>
  );
}
