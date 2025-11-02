import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Users, Heart, MessageCircle, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Followers",
    value: "24.5K",
    change: "+12.3%",
    trend: "up",
    icon: Users,
    color: "text-primary",
  },
  {
    title: "Engagement Rate",
    value: "8.2%",
    change: "+2.4%",
    trend: "up",
    icon: Heart,
    color: "text-secondary",
  },
  {
    title: "Total Posts",
    value: "142",
    change: "+18",
    trend: "up",
    icon: MessageCircle,
    color: "text-accent",
  },
  {
    title: "Reach",
    value: "156K",
    change: "+24.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-primary",
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
        
        return (
          <Card
            key={index}
            className="p-6 gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-border/50"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center gap-1">
                  <TrendIcon className={`h-4 w-4 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`} />
                  <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl bg-primary/10`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
