import { AppSidebar } from "@/components/app-sidebar";
import Notification from "@/components/dashboard/notification";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata = {
  title: "Dashboard | HabitRoast",
  description: "Your HabitRoast productivity dashboard. Track tasks, view streaks, and get AI roasts.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="h-screen overflow-hidden">
      <AppSidebar />
      <SidebarInset className="bg-[#0a0a0a] flex flex-col h-full overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-5 border-b border-white/10 bg-accent/5 backdrop-blur-md">
          <div className="flex flex-1 items-center justify-between">
            <SidebarTrigger className="-ml-1 text-white/70 hover:text-white" />
            <div className="flex shrink-0 items-center gap-2">
              <Notification />
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
