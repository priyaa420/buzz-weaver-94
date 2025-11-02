import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCards } from "@/components/StatsCards";
import { ProfilesGrid } from "@/components/ProfilesGrid";
import { ScheduledPosts } from "@/components/ScheduledPosts";
import { TrendingTopics } from "@/components/TrendingTopics";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {!user ? (
          <Card className="p-8 gradient-card shadow-card text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welcome to SocialHub
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Manage all your social media accounts in one place. Sign in to get started or create a new account.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/auth')} size="lg">
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Button>
              <Button onClick={() => navigate('/auth')} variant="outline" size="lg">
                <UserPlus className="mr-2 h-5 w-5" />
                Create Account
              </Button>
            </div>
          </Card>
        ) : (
          <>
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
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
