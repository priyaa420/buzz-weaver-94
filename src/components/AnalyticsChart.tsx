import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export const AnalyticsChart = () => {
  const data = [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 78 },
    { day: "Wed", value: 85 },
    { day: "Thu", value: 72 },
    { day: "Fri", value: 90 },
    { day: "Sat", value: 68 },
    { day: "Sun", value: 55 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <Card className="p-6 gradient-card shadow-card border-border/50 animate-slide-up">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">Engagement This Week</h2>
      </div>

      <div className="flex items-end justify-between gap-3 h-48">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-muted rounded-t-lg overflow-hidden relative">
              <div
                className="gradient-primary rounded-t-lg transition-all duration-500 ease-out"
                style={{
                  height: `${(item.value / maxValue) * 180}px`,
                }}
              />
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-foreground">{item.day}</p>
              <p className="text-xs text-muted-foreground">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
