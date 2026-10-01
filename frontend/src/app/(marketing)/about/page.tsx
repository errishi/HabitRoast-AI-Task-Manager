"use client";

import { motion } from "framer-motion";
import { Flame, Brain, Target, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const principles = [
  {
    title: "Radical Accountability",
    description: "Traditional task managers just sit there quietly while you fail. We believe your to-do list should care enough to yell at you.",
    icon: Target,
  },
  {
    title: "AI-Powered Tough Love",
    description: "Our Gemini-powered AI analyzes your procrastination patterns and delivers personalized roasts that hit exactly where it hurts.",
    icon: Brain,
  },
  {
    title: "Humor as a Catalyst",
    description: "Guilt is temporary, but a perfectly timed roast stays with you. We use dark humor to turn your anxiety into actionable momentum.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Background Effects */}
      <div className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[800px] rounded-full bg-red-500/[0.03] blur-[150px]" />
      <div className="pointer-events-none fixed right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/[0.02] blur-[120px]" />

      <main className="flex-1 px-4 pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="mb-24 text-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mb-6 flex items-center justify-center"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}
                className="h-15 w-auto object-contain drop-shadow-xl drop-shadow-red-500/30"
              />    
            </motion.div>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Why We Built an AI <br className="hidden sm:block" />
              <span className="text-gradient-flame glow-flame-text">That Insults You.</span>
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50"
            >
              The world didn't need another minimalist to-do list app that lets you silently push deadlines to tomorrow. It needed a wake-up call.
            </motion.p>
          </div>

          {/* The Story */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative mb-32 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-md sm:p-12 glass-card"
          >
            <div className="absolute -left-px top-1/4 h-32 w-[2px] bg-gradient-to-b from-transparent via-red-500 to-transparent" />
            
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">The Origin Story</h2>
            <div className="space-y-6 text-base leading-relaxed text-white/70">
              <p>
                HabitRoast started with a simple realization: positive reinforcement doesn't work for everyone. For chronic procrastinators, a gentle "You can do it!" notification is just easily dismissed noise.
              </p>
              <p>
                We noticed that the only time we actually got things done was when the sheer panic of an impending deadline kicked in, or when a friend brutally called us out for making the same excuses for the fifth week in a row. 
              </p>
              <p>
                So, we decided to bottle that feeling. By fine-tuning large language models on the art of the perfect roast, we created an accountability partner that doesn't hold back. HabitRoast is designed to make you laugh, make you wince, and most importantly, make you do your work.
              </p>
            </div>
          </motion.div>

          {/* Principles Grid */}
          <div className="mb-32">
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold text-white">Our Core Principles</h2>
            </motion.div>
            
            <div className="grid gap-6 sm:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  custom={5 + index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-red-500/10 feature-card-glow"
                >
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-red-400 group-hover:scale-110 group-hover:bg-red-500/10 transition-all duration-300">
                    <principle.icon className="size-5" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            custom={8}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-4xl">Ready to face reality?</h2>
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="h-14 gap-2 rounded-full bg-gradient-flame border-0 px-8 text-base font-semibold text-white shadow-xl shadow-red-500/25 transition-all hover:scale-105 hover:shadow-red-500/40"
              >
                Let's Get Roasted
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
