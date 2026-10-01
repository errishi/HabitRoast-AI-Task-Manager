"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  BrainCircuit,
  Flame,
  Bell,
  Shield,
  BarChart3,
  Zap,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Smart Goal Setting",
    description:
      "Set tasks with hard deadlines that mean business. No more \"I'll get to it tomorrow\" excuses.",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/10",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Roasts",
    description:
      "Google Gemini generates personalized, witty roasts based on the exact task you're ignoring.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/10",
  },
  {
    icon: Bell,
    title: "Real-Time Streaming",
    description:
      "Watch your roast appear word by word in real-time. It's like a disappointed parent, but funnier.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/10",
  },
  {
    icon: Clock,
    title: "Deadline Tracking",
    description:
      "Automatic monitoring of all your deadlines. The clock is always ticking, and we're always watching.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/10",
  },
  {
    icon: BarChart3,
    title: "Shame Analytics",
    description:
      "Track your procrastination patterns with beautiful charts. See exactly how much you've been slacking.",
    color: "text-red-300",
    bg: "bg-red-400/10",
    border: "border-red-400/10",
  },
  {
    icon: Shield,
    title: "Accountability Walls",
    description:
      "Optional public roast boards. Nothing motivates like the fear of public humiliation.",
    color: "text-orange-300",
    bg: "bg-orange-400/10",
    border: "border-orange-400/10",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={ref}
      className="relative px-4 py-24 sm:py-32"
    >
      {/* Section bg glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-red-500/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4 border-orange-500/20 bg-orange-500/10 text-orange-400 px-3 py-1">
            <Zap className="mr-1 size-3" />
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything You Need to{" "}
            <span className="text-gradient-flame">Stop Slacking</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/40 sm:text-lg">
            A full suite of productivity tools designed to make procrastination
            more painful than actually doing the work.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card
                className={`group relative h-full overflow-hidden border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] feature-card-glow`}
              >
                <CardContent className="p-6">
                  <div
                    className={`mb-4 flex size-12 items-center justify-center rounded-xl ${feature.bg} ${feature.border} border transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className={`size-6 ${feature.color}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/40 group-hover:text-white/50 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
