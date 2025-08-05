import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tables = [
  {
    name: "patients",
    columns: ["patient_id (PK)", "first_name", "last_name", "date_of_birth", "gender", "phone", "email", "address"],
    color: "bg-primary"
  },
  {
    name: "doctors", 
    columns: ["doctor_id (PK)", "first_name", "last_name", "specialty", "department", "hire_date", "phone"],
    color: "bg-accent"
  },
  {
    name: "admissions",
    columns: ["admission_id (PK)", "patient_id (FK)", "doctor_id (FK)", "admission_date", "discharge_date", "room_number"],
    color: "bg-medical-green"
  },
  {
    name: "diagnoses",
    columns: ["diagnosis_id (PK)", "admission_id (FK)", "diagnosis_code", "diagnosis_name", "severity", "diagnosis_date"],
    color: "bg-warning"
  },
  {
    name: "treatments",
    columns: ["treatment_id (PK)", "admission_id (FK)", "treatment_name", "start_date", "end_date", "success_rate", "cost"],
    color: "bg-info"
  }
];

export const DatabaseSchema = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-foreground">Healthcare Database Schema</CardTitle>
        <p className="text-sm text-muted-foreground">
          Relational database design with optimized table structure for healthcare analytics
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tables.map((table) => (
            <div key={table.name} className="border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${table.color}`}></div>
                <h3 className="font-semibold text-card-foreground">{table.name}</h3>
              </div>
              <div className="space-y-1">
                {table.columns.map((column) => (
                  <div key={column} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{column.split(" ")[0]}</span>
                    {column.includes("(PK)") && (
                      <Badge variant="outline" className="text-xs">PK</Badge>
                    )}
                    {column.includes("(FK)") && (
                      <Badge variant="secondary" className="text-xs">FK</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};