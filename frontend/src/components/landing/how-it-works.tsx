"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  ListChecks,
  Timer,
  Flame,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ListChecks,
    title: "Set Your Goals",
    description:
      "Add tasks with real deadlines. No wishy-washy \"sometime this week\" — pick a time and commit to it.",
    color: "from-red-500 to-red-600",
    iconColor: "text-red-400",
    glowColor: "shadow-red-500/20",
  },
  {
    step: "02",
    icon: Timer,
    title: "Miss Your Deadline",
    description:
      "Our backend silently watches every second tick by. The moment your deadline passes, the AI fires up.",
    color: "from-orange-500 to-orange-600",
    iconColor: "text-orange-400",
    glowColor: "shadow-orange-500/20",
  },
  {
    step: "03",
    icon: Flame,
    title: "Get Roasted",
    description:
      "Google Gemini generates a personalized, sarcastic roast streamed to your screen in real-time. Feel the burn.",
    color: "from-amber-500 to-red-500",
    iconColor: "text-amber-400",
    glowColor: "shadow-amber-500/20",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative px-4 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-orange-500/[0.03] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <Badge className="mb-4 border-red-500/20 bg-red-500/10 text-red-400 px-3 py-1">
            <Flame className="mr-1 size-3" />
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Three Steps to{" "}
            <span className="text-gradient-flame">Accountability</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/40 sm:text-lg">
            The process is simple. The roasts are not.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col items-center gap-4">
          {steps.map((step, i) => (
            <div key={step.step} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative mx-auto max-w-2xl"
              >
                <div className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]`}>
                  <div className="flex items-start gap-5 sm:gap-6">
                    {/* Step Number + Icon */}
                    <div className="relative shrink-0">
                      <div
                        className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg ${step.glowColor} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <step.icon className="size-7 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-[#0a0a0a] text-[10px] font-bold text-white/60 ring-1 ring-white/10">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/40 group-hover:text-white/50 transition-colors sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connector Arrow */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="flex justify-center py-2"
                >
                  <ArrowDown className="size-5 text-white/10" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
