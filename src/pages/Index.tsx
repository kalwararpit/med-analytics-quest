import { Activity, Users, Calendar, TrendingUp, Database, Stethoscope } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { DiagnosisChart } from "@/components/DiagnosisChart";
import { DoctorWorkloadChart } from "@/components/DoctorWorkloadChart";
import { TreatmentSuccessChart } from "@/components/TreatmentSuccessChart";
import { DatabaseSchema } from "@/components/DatabaseSchema";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/healthcare-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary to-medical-blue overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="h-8 w-8" />
                <h1 className="text-4xl font-bold">Healthcare Analytics</h1>
              </div>
              <h2 className="text-2xl font-light">
                SQL-Based Medical Data Intelligence Platform
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Comprehensive healthcare database analysis featuring patient tracking, 
                diagnosis frequency monitoring, doctor workload optimization, and treatment 
                success rate analytics powered by optimized MySQL queries.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" size="lg">
                  View Reports
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                  Database Schema
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={heroImage} 
                alt="Healthcare Analytics Dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="container mx-auto px-6 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Patients"
            value="2,847"
            change="+12% from last month"
            icon={Users}
            trend="up"
          />
          <MetricCard
            title="Active Doctors"
            value="48"
            change="+2 new hires"
            icon={Activity}
            trend="up"
          />
          <MetricCard
            title="Avg Length of Stay"
            value="3.7 days"
            change="-0.5 days from last month"
            icon={Calendar}
            trend="down"
          />
          <MetricCard
            title="Treatment Success Rate"
            value="91.2%"
            change="+2.1% improvement"
            icon={TrendingUp}
            trend="up"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <DiagnosisChart />
          <DoctorWorkloadChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TreatmentSuccessChart />
          <div className="bg-gradient-to-br from-medical-light to-white rounded-xl p-6 border">
            <div className="flex items-center gap-3 mb-4">
              <Database className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Key SQL Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-l-primary">
                <h4 className="font-medium text-foreground mb-2">Diagnosis Frequency Query</h4>
                <p className="text-sm text-muted-foreground">
                  Automated tracking of most common diagnoses with percentage distribution
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-l-accent">
                <h4 className="font-medium text-foreground mb-2">Doctor Workload Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time patient load balancing across medical staff
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-l-success">
                <h4 className="font-medium text-foreground mb-2">Treatment Outcomes</h4>
                <p className="text-sm text-muted-foreground">
                  Success rate tracking with length of stay optimization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Database Schema */}
        <DatabaseSchema />

        {/* Footer Section */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground">
            Healthcare Analytics Platform | Optimized MySQL Database Design | Real-time Reporting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;