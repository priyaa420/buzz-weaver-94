import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCards } from "@/components/StatsCards";
import { ProfilesGrid } from "@/components/ProfilesGrid";
import { ScheduledPosts } from "@/components/ScheduledPosts";
import { TrendingTopics } from "@/components/TrendingTopics";
import { AnalyticsChart } from "@/components/AnalyticsChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground">
            Monitor your social media performance across all platforms
          </p>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProfilesGrid />
            <ScheduledPosts />
          </div>
          
          <div className="space-y-8">
            <TrendingTopics />
            <AnalyticsChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
