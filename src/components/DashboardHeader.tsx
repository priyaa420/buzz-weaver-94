import { Button } from "@/components/ui/button";
import { PlusCircle, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const DashboardHeader = () => {
  return (
    <header className="border-b bg-card shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SocialHub
              </h1>
              <p className="text-xs text-muted-foreground">Manage All Your Profiles</p>
            </div>
          </div>

          <div className="flex-1 max-w-md hidden md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search profiles, posts, trends..."
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] text-destructive-foreground flex items-center justify-center">
                3
              </span>
            </Button>
            <Button className="gradient-primary border-0 shadow-md hover:shadow-lg transition-all">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
