import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '@/components/DashboardHeader';
import { StatsCards } from '@/components/StatsCards';
import { ProfilesGrid } from '@/components/ProfilesGrid';
import { ScheduledPosts } from '@/components/ScheduledPosts';
import { TrendingTopics } from '@/components/TrendingTopics';
import { AnalyticsChart } from '@/components/AnalyticsChart';
import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';

const UserPanel = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        <Card className="p-6 gradient-card shadow-card">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Welcome back!
              </h2>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </Card>

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

export default UserPanel;
