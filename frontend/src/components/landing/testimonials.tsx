"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Flame,
  Quote,
} from "lucide-react";

const roasts = [
  {
    task: "Finish quarterly report",
    roast:
      "\"You've been 'finishing' this report for 3 days. At this point the quarter is finishing you. Your spreadsheet has cobwebs. Even Excel is judging you.\"",
    name: "Alex M.",
    role: "Procrastination Champion",
    delay: "5 hours overdue",
  },
  {
    task: "Go to the gym",
    roast:
      "\"Your gym membership costs $50/month and the only exercise you've done is reaching for your phone to snooze the alarm. Your couch has a permanent imprint of your ambition.\"",
    name: "Sarah K.",
    role: "Proudly Roasted",
    delay: "2 days overdue",
  },
  {
    task: "Reply to client email",
    roast:
      "\"This email has been sitting in your inbox longer than leftovers sit in the back of your fridge. The client has probably moved on, started a family, and retired by now.\"",
    name: "Jordan P.",
    role: "Reformed Slacker",
    delay: "8 hours overdue",
  },
  {
    task: "Study for certification",
    roast:
      "\"You bought the study guide 6 months ago and the only thing you've studied is the art of procrastination. At least you'd pass that certification with flying colors.\"",
    name: "Riley D.",
    role: "Serial Postponer",
    delay: "3 weeks overdue",
  },
  {
    task: "Clean the apartment",
    roast:
      "\"Your apartment has developed its own ecosystem. Scientists want to study it. Even your Roomba filed for workers' comp and quit. The dust bunnies have started a union.\"",
    name: "Taylor W.",
    role: "Dust Collector",
    delay: "1 week overdue",
  },
  {
    task: "Update resume",
    roast:
      "\"Your resume still says 'proficient in Windows XP.' The last time you updated it, LinkedIn didn't exist. Your career gap has its own career gap.\"",
    name: "Morgan L.",
    role: "Eternally Updating",
    delay: "4 months overdue",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden px-4 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-red-500/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4 border-red-500/20 bg-red-500/10 text-red-400 px-3 py-1">
            <MessageSquare className="mr-1 size-3" />
            Wall of Shame
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Real Roasts. Real{" "}
            <span className="text-gradient-flame">Tears.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/40 sm:text-lg">
            Actual AI-generated roasts from users who dared to procrastinate.
          </p>
        </motion.div>

        {/* Scrolling Roast Cards - Two Rows */}
        <div
          className="space-y-4 relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Row 1 - scrolls left */}
          <div className="relative">
            <motion.div
              animate={{ x: [0, -1400] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
              }}
              className="flex gap-4"
            >
              {[...roasts, ...roasts].map((roast, i) => (
                <RoastCard key={`row1-${i}`} roast={roast} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 - scrolls right */}
          <div className="relative">
            <motion.div
              animate={{ x: [-1400, 0] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
              }}
              className="flex gap-4"
            >
              {[...roasts.slice(3), ...roasts.slice(0, 3), ...roasts.slice(3), ...roasts.slice(0, 3)].map(
                (roast, i) => (
                  <RoastCard key={`row2-${i}`} roast={roast} />
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoastCard({
  roast,
}: {
  roast: (typeof roasts)[number];
}) {
  return (
    <Card className="w-[380px] shrink-0 border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.1] transition-colors duration-300">
      <CardContent className="p-5">
        {/* Task that was missed */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-md bg-red-500/10">
            <Flame className="size-3 text-red-400" />
          </div>
          <span className="text-xs font-medium text-white/50 truncate">
            {roast.task}
          </span>
          <Badge
            className="ml-auto shrink-0 border-red-500/20 bg-red-500/10 text-red-400 text-[10px] px-1.5 py-0"
          >
            {roast.delay}
          </Badge>
        </div>

        {/* The roast */}
        <div className="relative">
          <Quote className="absolute -top-1 -left-1 size-4 text-red-500/20" />
          <p className="pl-4 text-sm leading-relaxed text-white/60 italic">
            {roast.roast}
          </p>
        </div>

        {/* User info */}
        <div className="mt-4 flex items-center gap-3 border-t border-white/[0.06] pt-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 text-xs font-bold text-white/60">
            {roast.name.charAt(0)}
          </div>
          <div>
            <p className="text-xs font-medium text-white/70">{roast.name}</p>
            <p className="text-[10px] text-white/30">{roast.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
