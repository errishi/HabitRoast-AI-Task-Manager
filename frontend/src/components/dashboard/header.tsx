"use client";

import { motion } from "framer-motion";
import { Calendar, Bell, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader() {
  const today = new Date();
  const greeting = getGreeting();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            {greeting}, <span className="text-gradient-flame">Rishi</span>
          </h1>
          <motion.div
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            className="text-2xl"
          >
            👋
          </motion.div>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm text-white/40">
          <Calendar className="size-3.5" />
          <span>{formattedDate}</span>
          <span className="text-white/20">•</span>
          <Badge className="bg-red-500/10 text-red-400 border-red-500/20 text-[10px] px-2 py-0">
            2 overdue
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search Input — using shadcn Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/30 pointer-events-none" />
          <Input
            type="text"
            placeholder="Search tasks..."
            className="h-9 w-48 rounded-xl border-white/[0.06] bg-white/[0.03] pl-9 pr-3 text-white/80 placeholder:text-white/25 focus-visible:border-red-500/30 focus-visible:ring-red-500/20 focus-visible:w-64 transition-all"
            id="dashboard-search"
          />
        </div>
      </div>
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}
