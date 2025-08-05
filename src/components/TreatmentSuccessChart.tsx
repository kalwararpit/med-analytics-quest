import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const treatmentData = [
  { month: "Jan", successRate: 87.2, avgLOS: 4.2 },
  { month: "Feb", successRate: 89.1, avgLOS: 3.8 },
  { month: "Mar", successRate: 91.3, avgLOS: 3.5 },
  { month: "Apr", successRate: 88.7, avgLOS: 4.1 },
  { month: "May", successRate: 92.4, avgLOS: 3.2 },
  { month: "Jun", successRate: 90.8, avgLOS: 3.7 }
];

export const TreatmentSuccessChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Treatment Success & Length of Stay</CardTitle>
        <p className="text-sm text-muted-foreground">
          Monthly trends in treatment outcomes and hospital stay duration
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={treatmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
              formatter={(value: number, name: string) => [
                name === "successRate" ? `${value}%` : `${value} days`,
                name === "successRate" ? "Success Rate" : "Avg Length of Stay"
              ]}
            />
            <Line 
              type="monotone" 
              dataKey="successRate" 
              stroke="hsl(var(--success))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="avgLOS" 
              stroke="hsl(var(--warning))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};