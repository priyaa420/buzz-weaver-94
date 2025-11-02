import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit, Trash2, Image as ImageIcon } from "lucide-react";

const scheduledPosts = [
  {
    content: "Excited to announce our new product launch! 🚀 Stay tuned for more updates.",
    platforms: ["Twitter", "LinkedIn"],
    scheduledFor: "Today, 2:00 PM",
    status: "scheduled",
    hasImage: true,
  },
  {
    content: "Check out our latest blog post on social media trends for 2025 📊",
    platforms: ["Facebook", "Instagram"],
    scheduledFor: "Tomorrow, 10:00 AM",
    status: "scheduled",
    hasImage: true,
  },
  {
    content: "Weekly tips: How to improve your engagement rate with authentic content 💡",
    platforms: ["Twitter", "Instagram"],
    scheduledFor: "Mar 15, 9:00 AM",
    status: "scheduled",
    hasImage: false,
  },
];

export const ScheduledPosts = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Scheduled Posts</h2>
        <Button variant="outline" size="sm">
          View Calendar
        </Button>
      </div>

      <div className="space-y-3 animate-slide-up">
        {scheduledPosts.map((post, index) => (
          <Card
            key={index}
            className="p-5 gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-border/50"
          >
            <div className="flex items-start gap-4">
              {post.hasImage && (
                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground mb-3 line-clamp-2">{post.content}</p>
                
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {post.platforms.map((platform, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.scheduledFor}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
