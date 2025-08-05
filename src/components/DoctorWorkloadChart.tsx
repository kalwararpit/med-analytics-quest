import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const workloadData = [
  { doctor: "Dr. Smith", patients: 45, color: "hsl(var(--primary))" },
  { doctor: "Dr. Johnson", patients: 38, color: "hsl(var(--accent))" },
  { doctor: "Dr. Brown", patients: 42, color: "hsl(var(--medical-green))" },
  { doctor: "Dr. Wilson", patients: 35, color: "hsl(var(--medical-accent))" },
  { doctor: "Dr. Davis", patients: 31, color: "hsl(var(--info))" },
  { doctor: "Dr. Miller", patients: 29, color: "hsl(var(--warning))" }
];

export const DoctorWorkloadChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Doctor Patient Load</CardTitle>
        <p className="text-sm text-muted-foreground">
          Current patient distribution by physician
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={workloadData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="patients"
              nameKey="doctor"
            >
              {workloadData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`${value} patients`, "Load"]}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};