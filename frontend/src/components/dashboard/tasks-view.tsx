"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Filter, LayoutGrid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TaskList } from "@/components/dashboard/task-list";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { QuickAddTask } from "@/components/dashboard/quick-add-task";

export function TasksView() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/30" />
          <Input 
            placeholder="Search all tasks..." 
            className="pl-9 bg-white/[0.03] border-white/[0.06] text-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-white/[0.03] border-white/[0.06] text-white hover:bg-white/[0.06]">
            <Filter className="mr-2 size-4" />
            Filter
          </Button>
          <Tabs defaultValue="list" className="w-[100px]">
            <TabsList className="grid w-full grid-cols-2 bg-white/[0.03]">
              <TabsTrigger value="list"><List className="size-4" /></TabsTrigger>
              <TabsTrigger value="board"><LayoutGrid className="size-4" /></TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <QuickAddTask />
          <TaskList />
        </div>
        <div className="hidden md:flex flex-col gap-4">
          {/* We can put categories or tags here later */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <h3 className="font-semibold text-white mb-4">Categories</h3>
            <div className="space-y-2">
              {['Work', 'Personal', 'Health', 'Learning'].map(cat => (
                <div key={cat} className="flex items-center justify-between text-sm text-white/60 hover:text-white cursor-pointer p-2 rounded-lg hover:bg-white/[0.04]">
                  <span>{cat}</span>
                  <span className="bg-white/10 px-2 rounded-full text-xs">5</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
