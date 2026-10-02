"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  Flame,
  MoreHorizontal,
  Play,
  Trash2,
  Edit3,
  Copy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

type TaskStatus = "pending" | "in-progress" | "overdue" | "complete";
type TaskPriority = "low" | "medium" | "high";

interface Task {
  id: string;
  title: string;
  deadline: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: string;
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Finish project proposal for Q4 planning",
    deadline: "2h ago",
    status: "overdue",
    priority: "high",
    category: "Work",
  },
  {
    id: "2",
    title: "Review pull request #42 — Auth module",
    deadline: "30m ago",
    status: "overdue",
    priority: "medium",
    category: "Dev",
  },
  {
    id: "3",
    title: "Morning workout — 30 min HIIT session",
    deadline: "Done",
    status: "complete",
    priority: "medium",
    category: "Health",
  },
  {
    id: "4",
    title: "Update API documentation for v2.1",
    deadline: "In 4h",
    status: "in-progress",
    priority: "medium",
    category: "Dev",
  },
  {
    id: "5",
    title: "Read 20 pages of Atomic Habits",
    deadline: "In 6h",
    status: "pending",
    priority: "low",
    category: "Learning",
  },
  {
    id: "6",
    title: "Deploy staging build & run smoke tests",
    deadline: "In 2h",
    status: "pending",
    priority: "high",
    category: "Dev",
  },
];

const statusConfig = {
  overdue: {
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/[0.06]",
    border: "border-red-500/10",
    badgeClass: "bg-red-500/10 text-red-400 border-red-500/20",
    label: "Overdue",
  },
  "in-progress": {
    icon: Play,
    color: "text-blue-400",
    bg: "bg-blue-500/[0.04]",
    border: "border-blue-500/10",
    badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    label: "In Progress",
  },
  pending: {
    icon: Clock,
    color: "text-white/30",
    bg: "bg-white/[0.02]",
    border: "border-white/[0.04]",
    badgeClass: "bg-white/5 text-white/40 border-white/10",
    label: "Pending",
  },
  complete: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/[0.04]",
    border: "border-emerald-500/10",
    badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    label: "Complete",
  },
};

const priorityColors = {
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-emerald-500",
};

export function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState("all");

  const tabCounts = {
    all: tasks.length,
    overdue: tasks.filter((t) => t.status === "overdue").length,
    "in-progress": tasks.filter((t) => t.status === "in-progress").length,
    pending: tasks.filter((t) => t.status === "pending").length,
    complete: tasks.filter((t) => t.status === "complete").length,
  };

  const filteredTasks = activeTab === "all"
    ? tasks
    : tasks.filter((t) => t.status === activeTab);

  const cycleStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const order: TaskStatus[] = ["pending", "in-progress", "complete"];
        const currentIndex = order.indexOf(t.status);
        const nextStatus = currentIndex === -1 ? "pending" : order[(currentIndex + 1) % order.length];
        return { ...t, status: nextStatus };
      })
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Card className="glass-card-dashboard border-0 rounded-2xl overflow-hidden">
      <CardHeader className="border-b border-white/[0.06] pb-0">
        <CardTitle className="text-base font-semibold text-white flex items-center gap-2">
          Today&apos;s Tasks
          <Badge className="bg-white/5 text-white/40 border-white/10 text-[10px]">
            {tasks.filter((t) => t.status !== "complete").length} remaining
          </Badge>
        </CardTitle>
        <CardAction>
          {/* Using shadcn Tabs for filter */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="h-8 bg-white/[0.03] rounded-xl p-0.5">
              {(["all", "overdue", "in-progress", "pending", "complete"] as const).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-lg px-2.5 py-1 text-[11px] data-active:bg-white/10 data-active:text-white text-white/35 hover:text-white/60 h-auto"
                >
                  {tab === "in-progress" ? "Active" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {tabCounts[tab] > 0 && (
                    <span className="ml-1 text-[9px] opacity-50">{tabCounts[tab]}</span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>

      <CardContent className="p-0">
        <div className="divide-y divide-white/[0.04]">
          <AnimatePresence mode="popLayout">
            {filteredTasks.map((task, i) => {
              const config = statusConfig[task.status];
              const StatusIcon = config.icon;
              return (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.03 }}
                  className={`
                    group relative flex items-center gap-3 px-5 py-3.5 transition-all duration-200
                    hover:bg-white/[0.02] cursor-default
                    ${task.status === "overdue" ? "bg-red-500/[0.02]" : ""}
                  `}
                >
                  {/* Priority Indicator */}
                  <div
                    className={`absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r-full ${priorityColors[task.priority]} opacity-60`}
                  />

                  {/* Status Toggle — wrapped in Tooltip */}
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          onClick={() => cycleStatus(task.id)}
                          className={`shrink-0 rounded-lg border ${config.border} ${config.bg} hover:scale-110`}
                        />
                      }
                    >
                      <StatusIcon className={`size-3.5 ${config.color}`} />
                    </TooltipTrigger>
                    <TooltipContent>Click to change status</TooltipContent>
                  </Tooltip>

                  {/* Task Info */}
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-medium transition-all ${
                      task.status === "complete"
                        ? "text-white/30 line-through"
                        : "text-white/80"
                    }`}>
                      {task.title}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className={`text-[11px] font-medium ${
                        task.status === "overdue" ? "text-red-400" : "text-white/25"
                      }`}>
                        {task.deadline}
                      </span>
                      <span className="text-white/10">•</span>
                      <Badge variant="outline" className="text-[10px] text-white/20 border-white/[0.06] px-1.5 py-0 h-4">
                        {task.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex shrink-0 items-center gap-2">
                    <Badge className={`${config.badgeClass} text-[10px] hidden sm:inline-flex`}>
                      {config.label}
                    </Badge>

                    {task.status === "overdue" && (
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      >
                        <Flame className="size-4 text-orange-400" />
                      </motion.div>
                    )}

                    {/* Task Actions — shadcn DropdownMenu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            className="text-white/20 opacity-0 group-hover:opacity-100 hover:text-white/60"
                          />
                        }
                      >
                        <MoreHorizontal className="size-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 bg-[#141414] border-white/10">
                        <DropdownMenuItem className="text-white/70 focus:bg-white/[0.06] focus:text-white">
                          <Edit3 className="size-3.5" />
                          Edit task
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white/70 focus:bg-white/[0.06] focus:text-white">
                          <Copy className="size-3.5" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-white/[0.06]" />
                        <DropdownMenuItem variant="destructive" onClick={() => deleteTask(task.id)}>
                          <Trash2 className="size-3.5" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredTasks.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="size-8 text-emerald-400/30" />
              <p className="mt-3 text-sm font-medium text-white/40">No tasks here</p>
              <p className="text-xs text-white/20">All caught up! 🎉</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
