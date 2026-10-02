"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Flame,
  TrendingUp,
  TrendingDown,
  Target,
} from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    label: "Tasks Completed",
    value: "12",
    total: "/18",
    change: "+3 today",
    trend: "up" as const,
    icon: CheckCircle2,
    color: "text-emerald-400",
    bgColor: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/10",
  },
  {
    label: "Overdue Tasks",
    value: "2",
    total: "",
    change: "−1 from yesterday",
    trend: "down" as const,
    icon: AlertTriangle,
    color: "text-red-400",
    bgColor: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/10",
  },
  {
    label: "Current Streak",
    value: "7",
    total: " days",
    change: "Personal best!",
    trend: "up" as const,
    icon: Flame,
    color: "text-orange-400",
    bgColor: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/10",
  },
  {
    label: "Productivity",
    value: "78",
    total: "%",
    change: "+12% this week",
    trend: "up" as const,
    icon: Target,
    color: "text-violet-400",
    bgColor: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/10",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            <Card className="glass-card-dashboard stat-card-glow border-0 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-default">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.bgColor} ${stat.borderColor} border`}>
                    <Icon className={`size-5 ${stat.color}`} />
                  </div>
                  <Badge
                    className={`text-[10px] px-2 py-0.5 ${
                      stat.trend === "up"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <TrendingUp className="mr-1 size-3" />
                    ) : (
                      <TrendingDown className="mr-1 size-3" />
                    )}
                    {stat.change}
                  </Badge>
                </div>

                <div className="mt-3">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-white/30">{stat.total}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-white/40">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
