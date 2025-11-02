import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Hash } from "lucide-react";

const trends = [
  {
    topic: "#DigitalMarketing",
    posts: "124K",
    growth: "+45%",
    category: "Marketing",
  },
  {
    topic: "#SocialMediaTips",
    posts: "89K",
    growth: "+32%",
    category: "Education",
  },
  {
    topic: "#ContentCreation",
    posts: "67K",
    growth: "+28%",
    category: "Creative",
  },
  {
    topic: "#BrandStrategy",
    posts: "54K",
    growth: "+21%",
    category: "Business",
  },
  {
    topic: "#InfluencerMarketing",
    posts: "43K",
    growth: "+18%",
    category: "Marketing",
  },
];

export const TrendingTopics = () => {
  return (
    <Card className="p-6 gradient-card shadow-card border-border/50 animate-slide-up">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">Trending Topics</h2>
      </div>

      <div className="space-y-4">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Hash className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{trend.topic}</p>
                <p className="text-xs text-muted-foreground">{trend.posts} posts</p>
              </div>
            </div>
            
            <div className="text-right">
              <Badge variant="secondary" className="text-xs mb-1">
                {trend.category}
              </Badge>
              <p className="text-xs font-medium text-green-500">{trend.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
