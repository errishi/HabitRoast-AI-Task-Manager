"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Flame, Bell, User, Shield } from "lucide-react";

export function SettingsView() {
  return (
    <div className="grid gap-6 md:grid-cols-[250px_1fr]">
      {/* Settings Navigation */}
      <div className="flex flex-col gap-2">
        <Button variant="ghost" className="justify-start bg-white/[0.04] text-white">
          <User className="mr-2 size-4" />
          Profile
        </Button>
        <Button variant="ghost" className="justify-start text-white/60 hover:text-white hover:bg-white/[0.04]">
          <Flame className="mr-2 size-4" />
          Roast Preferences
        </Button>
        <Button variant="ghost" className="justify-start text-white/60 hover:text-white hover:bg-white/[0.04]">
          <Bell className="mr-2 size-4" />
          Notifications
        </Button>
        <Button variant="ghost" className="justify-start text-white/60 hover:text-white hover:bg-white/[0.04]">
          <Shield className="mr-2 size-4" />
          Security
        </Button>
      </div>

      {/* Settings Content */}
      <div className="flex flex-col gap-6">
        <Card className="glass-card-dashboard border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Profile Settings</CardTitle>
            <CardDescription className="text-white/40">
              Manage your account details and public persona.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="size-20">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-red-500/30 to-orange-500/30 text-white text-2xl">R</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="bg-white/[0.03] border-white/10 text-white hover:bg-white/[0.06]">
                Change Avatar
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-white/60">Display Name</label>
                <Input defaultValue="Rishi" className="bg-white/[0.03] border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60">Email Address</label>
                <Input defaultValue="rishi@example.com" type="email" className="bg-white/[0.03] border-white/10 text-white" />
              </div>
            </div>

            <Button className="bg-gradient-flame text-white border-0 hover:brightness-110">
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
