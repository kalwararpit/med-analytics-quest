import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const diagnosisData = [
  { diagnosis: "Hypertension", count: 156, percentage: 23.5 },
  { diagnosis: "Diabetes", count: 134, percentage: 20.2 },
  { diagnosis: "Heart Disease", count: 89, percentage: 13.4 },
  { diagnosis: "Respiratory", count: 76, percentage: 11.4 },
  { diagnosis: "Arthritis", count: 65, percentage: 9.8 },
  { diagnosis: "Cancer", count: 45, percentage: 6.8 },
  { diagnosis: "Other", count: 98, percentage: 14.9 }
];

export const DiagnosisChart = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-foreground">Diagnosis Frequency Analysis</CardTitle>
        <p className="text-sm text-muted-foreground">
          Most common diagnoses across all patient admissions
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={diagnosisData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="diagnosis" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
              formatter={(value: number, name: string) => [
                `${value} cases (${diagnosisData.find(d => d.count === value)?.percentage}%)`,
                "Count"
              ]}
            />
            <Bar 
              dataKey="count" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};