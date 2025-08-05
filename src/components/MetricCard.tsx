import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
}

export const MetricCard = ({ title, value, change, icon: Icon, trend }: MetricCardProps) => {
  const trendColor = {
    up: "text-success",
    down: "text-destructive", 
    neutral: "text-muted-foreground"
  }[trend];

  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p className={`text-xs ${trendColor}`}>
          {change}
        </p>
      </CardContent>
    </Card>
  );
};