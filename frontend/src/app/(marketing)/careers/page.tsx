"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Heart, Rocket, Skull, MapPin, Clock, Flame } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const benefits = [
  {
    title: "Remote First",
    description: "Work from anywhere in the world. As long as you actually work, we don't care what timezone you're in.",
    icon: Globe,
  },
  {
    title: "Unlimited PTO",
    description: "Take the time you need. Though our AI will absolutely roast you if you take a 6-month vacation.",
    icon: Heart,
  },
  {
    title: "Top-Tier Gear",
    description: "M-series MacBooks, 4K monitors, and whatever else you need to ship code faster than procrastination hits.",
    icon: Rocket,
  },
  {
    title: "Thick Skin Required",
    description: "We drink our own champagne. Be prepared for the HabitRoast AI to manage your sprint tasks too.",
    icon: Skull,
  },
];

const openRoles = [
  {
    id: 1,
    title: "Senior AI Prompt Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Full Stack Developer (Next.js/Node)",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Head of Dark Humor",
    department: "Content",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Support Apology Specialist",
    department: "Customer Success",
    location: "Remote",
    type: "Part-time",
  }
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Background Effects */}
      <div className="pointer-events-none fixed right-0 top-0 w-200 h-200 rounded-full bg-orange-500/3 blur-[150px] translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none fixed left-0 top-[40%] w-200 h-200 rounded-full bg-red-500/3 blur-[150px] -translate-x-1/2" />

      <main className="flex-1 px-4 pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="mb-24 text-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 flex justify-center"
            >
              <Badge className="border-red-500/20 bg-red-500/10 text-red-400 px-4 py-1.5 text-sm font-medium">
                <Flame className="mr-1.5 size-3.5" />
                We're Hiring
              </Badge>
            </motion.div>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Join the <span className="text-gradient-flame glow-flame-text">Roastmasters.</span>
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50"
            >
              We're a team of recovering procrastinators building the most aggressive AI task manager on the internet. Help us bully the world into productivity.
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-32"
          >
            <h2 className="mb-10 text-center text-3xl font-bold text-white">Why Work With Us?</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="group rounded-3xl border border-white/8 bg-white/2 p-8 backdrop-blur-md transition-all hover:bg-white/4 hover:shadow-2xl hover:shadow-red-500/10 glass-card"
                >
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-white/5 border border-white/1 text-red-400 group-hover:scale-110 group-hover:bg-red-500/10 transition-all duration-300">
                    <benefit.icon className="size-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="leading-relaxed text-white/50">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Open Roles Section */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-12"
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">Open Positions</h2>
              <p className="mt-4 text-white/50">Don't see your role? Email us anyway. We respect the hustle.</p>
            </div>

            <div className="flex flex-col gap-4">
              {openRoles.map((role) => (
                <Link key={role.id} href={`/careers/${role.id}`} className="group block">
                  <div className="flex flex-col justify-between rounded-2xl border border-white/8 bg-white/2 p-6 backdrop-blur-md transition-all hover:border-red-500/30 hover:bg-white/4 hover:shadow-2xl hover:shadow-red-500/10 sm:flex-row sm:items-center glass-card">
                    
                    <div className="mb-4 sm:mb-0">
                      <h3 className="mb-2 text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                        <span className="font-medium text-white/70">{role.department}</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="size-3.5" />
                          {role.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="size-3.5" />
                          {role.type}
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center justify-end">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-transform group-hover:translate-x-2 group-hover:bg-gradient-flame group-hover:text-white">
                        <ArrowRight className="size-5" />
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
