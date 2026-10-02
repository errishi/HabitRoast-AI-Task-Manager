"use client";

import { motion } from "framer-motion";
import { Flame, Trophy, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

// Mock streak data: true = completed, false = missed, null = today/future
const streakData = [
  { day: "Mon", completed: true, tasks: 5 },
  { day: "Tue", completed: true, tasks: 4 },
  { day: "Wed", completed: true, tasks: 6 },
  { day: "Thu", completed: true, tasks: 3 },
  { day: "Fri", completed: true, tasks: 7 },
  { day: "Sat", completed: true, tasks: 2 },
  { day: "Sun", completed: null, tasks: 0 }, // Today
];

const achievements = [
  { label: "7-Day Streak", icon: Flame, color: "text-orange-400", unlocked: true },
  { label: "Task Master", icon: Trophy, color: "text-yellow-400", unlocked: true },
  { label: "Early Bird", icon: Star, color: "text-violet-400", unlocked: false },
];

export function StreakTracker() {
  const completedDays = streakData.filter((d) => d.completed === true).length;
  const progressValue = Math.round((completedDays / 7) * 100);

  return (
    <Card className="glass-card-dashboard border-0 rounded-2xl overflow-hidden">
      <CardHeader className="border-b border-white/[0.06]">
        <CardTitle className="text-sm font-semibold text-white flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <Flame className="size-5 text-orange-400" />
          </motion.div>
          Streak Tracker
        </CardTitle>
        <CardAction>
          <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-[10px]">
            🔥 {completedDays} days
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="pt-4">
        {/* Week Grid */}
        <div className="grid grid-cols-7 gap-2">
          {streakData.map((day, i) => (
            <Tooltip key={day.day}>
              <TooltipTrigger
                render={
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="flex flex-col items-center gap-1.5"
                  />
                }
              >
                <span className="text-[10px] font-medium text-white/30">{day.day}</span>
                <div
                  className={`
                    relative flex size-9 items-center justify-center rounded-xl transition-all
                    ${day.completed === true
                      ? "bg-gradient-to-br from-orange-500/30 to-red-500/20 border border-orange-500/20 shadow-lg shadow-orange-500/10"
                      : day.completed === null
                        ? "border-2 border-dashed border-white/10 bg-white/[0.02]"
                        : "bg-red-500/10 border border-red-500/20"
                    }
                  `}
                >
                  {day.completed === true ? (
                    <Flame className="size-4 text-orange-400" />
                  ) : day.completed === null ? (
                    <span className="text-[10px] text-white/30">?</span>
                  ) : (
                    <span className="text-[10px] text-red-400">✕</span>
                  )}

                  {/* Today indicator */}
                  {day.completed === null && (
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -bottom-1 size-1 rounded-full bg-white/60"
                    />
                  )}
                </div>
                {day.completed === true && (
                  <span className="text-[9px] text-white/20">{day.tasks} tasks</span>
                )}
              </TooltipTrigger>
              <TooltipContent>
                {day.day}: {day.completed === true ? `${day.tasks} tasks completed` : day.completed === null ? "Today" : "Missed"}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Progress Bar — shadcn Progress */}
        <div className="mt-4">
          <Progress value={progressValue}>
            <ProgressLabel className="text-[11px] text-white/30">Weekly Goal</ProgressLabel>
            <ProgressValue className="text-[11px] font-medium text-orange-400">
              {completedDays}/7 days
            </ProgressValue>
          </Progress>
        </div>
      </CardContent>

      <Separator className="bg-white/[0.06]" />

      {/* Achievements */}
      <CardContent className="pt-4 pb-4">
        <p className="mb-3 text-[11px] font-medium text-white/30 uppercase tracking-wider">Recent Achievements</p>
        <div className="flex flex-col gap-2">
          {achievements.map((ach, i) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 ${
                  ach.unlocked
                    ? "bg-white/[0.03]"
                    : "bg-white/[0.01] opacity-40"
                }`}
              >
                <div className={`flex size-6 items-center justify-center rounded-lg ${
                  ach.unlocked ? "bg-white/[0.06]" : "bg-white/[0.03]"
                }`}>
                  <Icon className={`size-3.5 ${ach.unlocked ? ach.color : "text-white/20"}`} />
                </div>
                <span className={`text-xs font-medium ${ach.unlocked ? "text-white/70" : "text-white/20"}`}>
                  {ach.label}
                </span>
                {ach.unlocked ? (
                  <Badge className="ml-auto bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[9px]">
                    Unlocked
                  </Badge>
                ) : (
                  <span className="ml-auto text-[10px] text-white/15">Locked</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
