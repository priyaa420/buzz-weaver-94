import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Twitter, Instagram, Linkedin, MoreVertical, CheckCircle2 } from "lucide-react";

const profiles = [
  {
    platform: "Twitter",
    handle: "@brandcompany",
    followers: "8.2K",
    posts: 342,
    engagement: "9.2%",
    status: "active",
    icon: Twitter,
    color: "bg-blue-500",
  },
  {
    platform: "Instagram",
    handle: "@brandcompany",
    followers: "12.5K",
    posts: 156,
    engagement: "12.5%",
    status: "active",
    icon: Instagram,
    color: "bg-pink-500",
  },
  {
    platform: "LinkedIn",
    handle: "Brand Company",
    followers: "3.8K",
    posts: 89,
    engagement: "6.1%",
    status: "active",
    icon: Linkedin,
    color: "bg-blue-600",
  },
  {
    platform: "Facebook",
    handle: "Brand Company",
    followers: "15.2K",
    posts: 201,
    engagement: "5.8%",
    status: "active",
    icon: Facebook,
    color: "bg-blue-700",
  },
];

export const ProfilesGrid = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Connected Profiles</h2>
        <Button variant="outline" size="sm">
          Manage Profiles
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up">
        {profiles.map((profile, index) => {
          const Icon = profile.icon;
          return (
            <Card
              key={index}
              className="p-6 gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-border/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${profile.color} p-2.5 rounded-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{profile.platform}</h3>
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">{profile.handle}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-foreground">{profile.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{profile.posts}</p>
                  <p className="text-xs text-muted-foreground">Posts</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">{profile.engagement}</p>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                <Badge variant="secondary" className="text-xs">
                  Last post: 2 hours ago
                </Badge>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
