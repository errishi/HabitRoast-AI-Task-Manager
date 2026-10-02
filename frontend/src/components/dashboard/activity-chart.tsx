"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const activityData = [
  { day: "Mon", tasks: 5, max: 8 },
  { day: "Tue", tasks: 3, max: 8 },
  { day: "Wed", tasks: 7, max: 8 },
  { day: "Thu", tasks: 4, max: 8 },
  { day: "Fri", tasks: 8, max: 8 },
  { day: "Sat", tasks: 2, max: 8 },
  { day: "Sun", tasks: 6, max: 8 },
];

const hourlyData = [
  { hour: "6am", value: 10 },
  { hour: "8am", value: 35 },
  { hour: "10am", value: 75 },
  { hour: "12pm", value: 55 },
  { hour: "2pm", value: 85 },
  { hour: "4pm", value: 60 },
  { hour: "6pm", value: 40 },
  { hour: "8pm", value: 20 },
];

export function ActivityChart() {
  return (
    <Card className="glass-card-dashboard border-0 rounded-2xl overflow-hidden">
      <CardHeader className="border-b border-white/[0.06]">
        <CardTitle className="text-sm font-semibold text-white flex items-center gap-2">
          <BarChart3 className="size-4 text-white/50" />
          Activity
        </CardTitle>
        <CardAction>
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]">
            <TrendingUp className="mr-1 size-2.5" />
            +18% vs last week
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {/* Weekly Bar Chart */}
          <div className="border-r border-white/[0.04] p-5">
            <p className="mb-4 text-[11px] font-medium text-white/30 uppercase tracking-wider">Tasks Completed</p>
            <div className="flex items-end justify-between gap-2 h-32">
              {activityData.map((item, i) => {
                const height = (item.tasks / item.max) * 100;
                const isToday = item.day === "Sun";
                return (
                  <Tooltip key={item.day}>
                    <TooltipTrigger
                      render={
                        <div className="flex flex-1 flex-col items-center gap-2" />
                      }
                    >
                      <span className="text-[10px] font-medium text-white/40">{item.tasks}</span>
                      <div className="relative w-full flex justify-center">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                          style={{
                            height: `${height}%`,
                            maxHeight: "100px",
                            minHeight: "8px",
                            transformOrigin: "bottom",
                          }}
                          className={`
                            w-full max-w-[28px] rounded-t-md transition-all
                            ${isToday
                              ? "bg-gradient-to-t from-red-500 to-orange-500 shadow-lg shadow-red-500/20"
                              : "bg-white/[0.08] hover:bg-white/[0.14]"
                            }
                          `}
                        />
                      </div>
                      <span className={`text-[10px] ${isToday ? "text-red-400 font-semibold" : "text-white/25"}`}>
                        {item.day}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>{item.day}: {item.tasks} tasks completed</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>

          {/* Productivity Hours */}
          <div className="p-5">
            <p className="mb-4 text-[11px] font-medium text-white/30 uppercase tracking-wider">Peak Productivity Hours</p>
            <div className="flex flex-col gap-2">
              {hourlyData.map((item, i) => (
                <Tooltip key={item.hour}>
                  <TooltipTrigger
                    render={
                      <div className="flex items-center gap-3" />
                    }
                  >
                    <span className="w-8 text-[10px] text-white/25 text-right shrink-0">{item.hour}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ delay: 0.5 + i * 0.06, duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          item.value >= 70
                            ? "bg-gradient-to-r from-red-500 to-orange-500"
                            : item.value >= 40
                              ? "bg-white/15"
                              : "bg-white/[0.08]"
                        }`}
                      />
                    </div>
                    <span className="w-6 text-[10px] text-white/20 shrink-0">{item.value}%</span>
                  </TooltipTrigger>
                  <TooltipContent>{item.hour}: {item.value}% productivity</TooltipContent>
                </Tooltip>
              ))}
            </div>
            <p className="mt-3 text-[10px] text-white/20">
              🎯 Peak hours: <span className="text-orange-400 font-medium">10am</span> and <span className="text-orange-400 font-medium">2pm</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
