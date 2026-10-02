"use client";

import { motion, Variants } from "framer-motion";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { TaskList } from "@/components/dashboard/task-list";
import { AiRoastPanel } from "@/components/dashboard/ai-roast-panel";
import { StreakTracker } from "@/components/dashboard/streak-tracker";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { QuickAddTask } from "@/components/dashboard/quick-add-task";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Background Ambient Effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-red-500/[0.03] blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <DashboardHeader />
        </motion.div>

        {/* Stats Cards Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6"
        >
          <StatsCards />
        </motion.div>

        {/* Main Content Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Quick Add Task */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <QuickAddTask />
            </motion.div>

            {/* Task List */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <TaskList />
            </motion.div>

            {/* Activity Chart */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              <ActivityChart />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* AI Roast Panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <AiRoastPanel />
            </motion.div>

            {/* Streak Tracker */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <StreakTracker />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
