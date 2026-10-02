"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles, Zap, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export function QuickAddTask() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<"low" | "medium" | "high">("medium");

  const priorities = [
    { value: "low" as const, label: "Low", color: "bg-emerald-500", activeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    { value: "medium" as const, label: "Medium", color: "bg-yellow-500", activeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    { value: "high" as const, label: "High", color: "bg-red-500", activeColor: "bg-red-500/20 text-red-400 border-red-500/30" },
  ];

  const handleSubmit = () => {
    if (!taskTitle.trim()) return;
    // TODO: Integrate with backend
    setTaskTitle("");
    setIsExpanded(false);
  };

  return (
    <Card className="glass-card-dashboard border-0 rounded-2xl overflow-hidden transition-all duration-300">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CardContent
              className="p-0 cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              <button
                className="flex w-full items-center gap-3 px-5 py-4 text-left transition-all hover:bg-white/[0.02] group"
                id="quick-add-task-btn"
              >
                <div className="flex size-9 items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02] transition-all group-hover:border-red-500/30 group-hover:bg-red-500/5">
                  <Plus className="size-4 text-white/30 transition-colors group-hover:text-red-400" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-white/30 transition-colors group-hover:text-white/50">
                    Add a new task...
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-white/15">
                  <Sparkles className="size-3" />
                  <span>AI can generate tasks too</span>
                </div>
              </button>
            </CardContent>
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 64 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 64 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="p-5">
              {/* Input Row */}
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                  <Plus className="size-4 text-red-400" />
                </div>
                <Input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="What do you need to get done?"
                  autoFocus
                  className="flex-1 border-0 bg-transparent dark:bg-transparent shadow-none text-white/80 placeholder:text-white/25 focus-visible:ring-0 focus-visible:border-0 p-0 h-auto"
                  id="quick-add-task-input"
                />
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={() => setIsExpanded(false)}
                  className="text-white/30 hover:text-white/60"
                >
                  <X className="size-3.5" />
                </Button>
              </div>

              {/* Options Row */}
              <div className="mt-3 flex items-center justify-between pl-12">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/25 mr-1">Priority:</span>
                  {priorities.map((p) => (
                    <Badge
                      key={p.value}
                      render={<button onClick={() => setSelectedPriority(p.value)} />}
                      className={`cursor-pointer transition-all text-[11px] ${
                        selectedPriority === p.value
                          ? p.activeColor
                          : "bg-transparent border-transparent text-white/25 hover:text-white/40"
                      }`}
                    >
                      <div className={`size-1.5 rounded-full ${p.color} ${
                        selectedPriority === p.value ? "opacity-100" : "opacity-30"
                      }`} />
                      {p.label}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          size="xs"
                          variant="ghost"
                          className="text-white/30 hover:text-orange-400 gap-1"
                          id="ai-generate-task-btn"
                        />
                      }
                    >
                      <Zap className="size-3" />
                      <span className="text-[10px]">AI Generate</span>
                    </TooltipTrigger>
                    <TooltipContent>Use AI to generate task suggestions</TooltipContent>
                  </Tooltip>

                  <Button
                    size="xs"
                    onClick={handleSubmit}
                    disabled={!taskTitle.trim()}
                    className="bg-gradient-flame text-white border-0 gap-1 disabled:opacity-30"
                    id="quick-add-submit-btn"
                  >
                    <Send className="size-3" />
                    <span className="text-[10px]">Add</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
