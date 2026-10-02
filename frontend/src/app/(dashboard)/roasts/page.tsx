import { RoastsView } from "@/components/dashboard/roasts-view";

export default function RoastsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white">AI Roasts</h2>
      </div>
      <RoastsView />
    </div>
  );
}
