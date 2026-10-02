"use client";

import { ActivityChart } from "@/components/dashboard/activity-chart";
import { StreakTracker } from "@/components/dashboard/streak-tracker";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

const taskData = [
  { name: 'Completed', value: 45, color: '#10b981' },
  { name: 'Overdue', value: 12, color: '#ef4444' },
  { name: 'Pending', value: 23, color: '#f59e0b' },
];

export function AnalyticsView() {
  return (
    <div className="flex flex-col gap-6">
      <StatsCards />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="md:col-span-1 lg:col-span-4">
          <ActivityChart />
        </div>
        <div className="md:col-span-1 lg:col-span-3">
          <StreakTracker />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass-card-dashboard border-0 rounded-2xl md:col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white/70">Task Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {taskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#141414', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-2">
              {taskData.map(item => (
                <div key={item.name} className="flex items-center gap-1.5 text-xs text-white/60">
                  <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card-dashboard border-0 rounded-2xl md:col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white/70">Roast History Analysis</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/[0.02]">
                <p className="text-white/40 text-sm">More detailed analytics coming soon...</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
