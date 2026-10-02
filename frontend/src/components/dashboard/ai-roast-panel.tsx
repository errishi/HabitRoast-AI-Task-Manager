"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Flame, Zap, Sparkles, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const roasts = [
  {
    text: 'Oh look, your "Finish project proposal" has been overdue for 2 hours. At this rate, your proposal will finish itself before you do. Maybe rename it to "Eventually get around to it" — it\'d be more honest. 🔥',
    severity: "savage",
  },
  {
    text: "Two overdue tasks? That's not a to-do list, that's a to-don't list. Your procrastination is so consistent, it's the only habit you've actually formed. ☕",
    severity: "savage",
  },
  {
    text: "Hey, at least you're consistent — consistently behind schedule. Your deadlines called, they said they don't even bother waiting anymore. 💀",
    severity: "brutal",
  },
];

export function AiRoastPanel() {
  const [currentRoast, setCurrentRoast] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTone, setActiveTone] = useState("sarcastic");

  useEffect(() => {
    if (!isTyping) return;

    const text = roasts[currentRoast].text;
    let charIndex = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayedText(text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [currentRoast, isTyping]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentRoast((prev) => (prev + 1) % roasts.length);
      setIsTyping(true);
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <Card className="glass-card-dashboard border-0 rounded-2xl overflow-hidden">
      <CardHeader className="border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-xl bg-gradient-flame shadow-lg shadow-red-500/20">
            <Zap className="size-4 text-white" />
          </div>
          <div>
            <CardTitle className="text-sm font-semibold text-white">AI Roast</CardTitle>
            <p className="text-[10px] text-white/30">Powered by Gemini</p>
          </div>
        </div>

        <CardAction>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex items-center gap-1"
          >
            <div className="size-1.5 rounded-full bg-red-500" />
            <span className="text-[10px] text-red-400 font-semibold tracking-wide">LIVE</span>
          </motion.div>
        </CardAction>
      </CardHeader>

      <CardContent className="pt-5">
        {/* Roast Bubble */}
        <div className="rounded-xl border border-red-500/10 bg-gradient-to-br from-red-500/[0.06] to-transparent p-4">
          <div className="flex items-start gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-flame shadow-lg shadow-red-500/25"
            >
              <Flame className="size-4.5 text-white" />
            </motion.div>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-relaxed text-red-200/80">
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block ml-0.5 h-4 w-0.5 bg-red-400/80 align-middle"
                  />
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Severity + Refresh */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/20 text-[10px]">
              <Flame className="mr-1 size-2.5" />
              {roasts[currentRoast].severity === "savage" ? "Savage" : "Brutal"}
            </Badge>
            <span className="text-[10px] text-white/20">
              Tone: {activeTone.charAt(0).toUpperCase() + activeTone.slice(1)}
            </span>
          </div>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  size="icon-xs"
                  variant="ghost"
                  onClick={handleRefresh}
                  className="text-white/30 hover:text-red-400"
                  id="roast-refresh-btn"
                />
              }
            >
              <RefreshCw className={`size-3 ${isRefreshing ? "animate-spin" : ""}`} />
            </TooltipTrigger>
            <TooltipContent>Generate new roast</TooltipContent>
          </Tooltip>
        </div>

        {/* Tone Selector — using shadcn Tabs */}
        <div className="mt-4">
          <Tabs value={activeTone} onValueChange={setActiveTone}>
            <TabsList className="h-8 bg-white/[0.02] rounded-lg p-0.5 w-full">
              <TabsTrigger
                value="sarcastic"
                className="rounded-md text-[11px] data-active:bg-red-500/10 data-active:text-red-400 text-white/25 h-auto py-1.5 flex-1"
              >
                😏 Sarcastic
              </TabsTrigger>
              <TabsTrigger
                value="motivational"
                className="rounded-md text-[11px] data-active:bg-blue-500/10 data-active:text-blue-400 text-white/25 h-auto py-1.5 flex-1"
              >
                💪 Motivational
              </TabsTrigger>
              <TabsTrigger
                value="funny"
                className="rounded-md text-[11px] data-active:bg-yellow-500/10 data-active:text-yellow-400 text-white/25 h-auto py-1.5 flex-1"
              >
                😂 Funny
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardContent>

      <Separator className="bg-white/[0.04]" />

      <CardFooter className="py-3 gap-1.5 text-[10px] text-white/20">
        <Sparkles className="size-3" />
        <span>Roasts are AI-generated based on your task history</span>
      </CardFooter>
    </Card>
  );
}
