"use client";

import { AiRoastPanel } from "@/components/dashboard/ai-roast-panel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Clock } from "lucide-react";

const pastRoasts = [
  {
    id: 1,
    date: "2 hours ago",
    tone: "Brutal",
    text: "Wow, three overdue tasks. Are you building a collection or just genuinely allergic to productivity? Your to-do list is starting to look like a museum of unfulfilled promises.",
  },
  {
    id: 2,
    date: "Yesterday",
    tone: "Sarcastic",
    text: "Oh look, you actually completed a task. Do you want a medal, or should we throw a parade for doing exactly what you're supposed to do?",
  },
  {
    id: 3,
    date: "Oct 1, 2026",
    tone: "Passive Aggressive",
    text: "I see you pushed 'workout' to tomorrow again. It's okay, I'm sure your future self loves dealing with your present self's laziness. Keep it up.",
  }
];

export function RoastsView() {
  return (
    <div className="flex flex-col gap-6">
      <AiRoastPanel />

      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Flame className="size-5 text-orange-500" />
          Hall of Shame (Past Roasts)
        </h3>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pastRoasts.map((roast) => (
            <Card key={roast.id} className="glass-card-dashboard border-0 rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="bg-white/[0.03] text-white/60 border-white/10 text-[10px]">
                    {roast.tone}
                  </Badge>
                  <div className="flex items-center gap-1 text-[10px] text-white/40">
                    <Clock className="size-3" />
                    {roast.date}
                  </div>
                </div>
                <p className="text-sm text-white/80 italic">"{roast.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
