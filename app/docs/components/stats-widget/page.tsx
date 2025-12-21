"use client";
import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/page-header";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CLIInstall } from "@/components/docs/cli-install";
import {
  StatCard,
  MetricStat,
  ComparisonStat,
  StatsGrid,
  CircularProgressStat,
} from "@/registry/widgets/stats-widget";
import { Users, DollarSign, Activity, Zap, Target, TrendingUp } from "lucide-react";

const statCardCode = `<StatCard
  title="Total Users"
  value="12,345"
  change={{ value: 12.5, type: "increase" }}
  icon={<Users className="w-5 h-5" />}
/>

<StatCard
  title="Revenue"
  value="$45,678"
  change={{ value: 8.2, type: "increase" }}
  glowColor="green"
  icon={<DollarSign className="w-5 h-5" />}
/>

<StatCard
  title="Active Sessions"
  value="1,234"
  change={{ value: 5.3, type: "decrease" }}
  glowColor="red"
/>`;

const metricStatCode = `<MetricStat
  label="CPU Usage"
  value={65}
  max={100}
  unit="%"
  icon={<Activity className="w-4 h-4" />}
  glowColor="cyan"
/>

<MetricStat
  label="Storage"
  value={750}
  max={1000}
  unit="GB"
  icon={<Zap className="w-4 h-4" />}
  glowColor="purple"
/>`;

const comparisonCode = `<ComparisonStat
  title="Monthly Revenue"
  current={125000}
  previous={110000}
  format={(v) => "$" + (v / 1000).toFixed(0) + "k"}
  icon={<DollarSign className="w-5 h-5" />}
  glowColor="green"
/>

<ComparisonStat
  title="Active Users"
  current={8500}
  previous={9200}
  icon={<Users className="w-5 h-5" />}
  glowColor="blue"
/>`;

const gridCode = `<StatsGrid
  stats={[
    {
      title: "Total Users",
      value: "12,345",
      change: { value: 12.5, type: "increase" },
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: { value: 8.2, type: "increase" },
      glowColor: "green",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      title: "Active Sessions",
      value: "1,234",
      change: { value: 5.3, type: "decrease" },
      glowColor: "red",
    },
  ]}
/>`;

const circularCode = `<CircularProgressStat
  label="Completion"
  value={75}
  max={100}
  unit="%"
  icon={<Target className="w-6 h-6" />}
  glowColor="cyan"
  size="md"
/>

<CircularProgressStat
  label="Storage Used"
  value={750}
  max={1000}
  unit="GB"
  glowColor="purple"
  size="lg"
/>`;

export default function StatsWidgetsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Stats Widgets"
        description="Statistics and metrics widgets for displaying data, comparisons, and progress."
      />

      <CLIInstall componentName="stats-widget" />

      <ComponentPreview
        title="Stat Card"
        description="Simple stat card with value, title, and optional change indicator."
        preview={
          <div className="flex flex-wrap gap-6">
            <StatCard
              title="Total Users"
              value="12,345"
              change={{ value: 12.5, type: "increase" }}
              icon={<Users className="w-5 h-5" />}
            />
            <StatCard
              title="Revenue"
              value="$45,678"
              change={{ value: 8.2, type: "increase" }}
              glowColor="green"
              icon={<DollarSign className="w-5 h-5" />}
            />
            <StatCard
              title="Active Sessions"
              value="1,234"
              change={{ value: 5.3, type: "decrease" }}
              glowColor="red"
            />
          </div>
        }
        code={statCardCode}
      />

      <ComponentPreview
        title="Metric Stat"
        description="Progress bar stat showing value against a maximum with visual indicator."
        preview={
          <div className="flex flex-wrap gap-6">
            <MetricStat
              label="CPU Usage"
              value={65}
              max={100}
              unit="%"
              icon={<Activity className="w-4 h-4" />}
              glowColor="cyan"
            />
            <MetricStat
              label="Storage"
              value={750}
              max={1000}
              unit="GB"
              icon={<Zap className="w-4 h-4" />}
              glowColor="purple"
            />
            <MetricStat
              label="Bandwidth"
              value={420}
              max={500}
              unit="GB"
              glowColor="amber"
            />
          </div>
        }
        code={metricStatCode}
      />

      <ComponentPreview
        title="Comparison Stat"
        description="Stat widget comparing current value with previous period."
        preview={
          <div className="flex flex-wrap gap-6">
            <ComparisonStat
              title="Monthly Revenue"
              current={125000}
              previous={110000}
              format={(v) => `$${(v / 1000).toFixed(0)}k`}
              icon={<DollarSign className="w-5 h-5" />}
              glowColor="green"
            />
            <ComparisonStat
              title="Active Users"
              current={8500}
              previous={9200}
              icon={<Users className="w-5 h-5" />}
              glowColor="blue"
            />
            <ComparisonStat
              title="Page Views"
              current={125000}
              previous={120000}
              format={(v) => String((v / 1000).toFixed(1)) + "k"}
              glowColor="purple"
            />
          </div>
        }
        code={comparisonCode}
      />

      <ComponentPreview
        title="Stats Grid"
        description="Grid layout for displaying multiple stat cards together."
        preview={
          <StatsGrid
            stats={[
              {
                title: "Total Users",
                value: "12,345",
                change: { value: 12.5, type: "increase" },
                icon: <Users className="w-5 h-5" />,
              },
              {
                title: "Revenue",
                value: "$45,678",
                change: { value: 8.2, type: "increase" },
                glowColor: "green",
                icon: <DollarSign className="w-5 h-5" />,
              },
              {
                title: "Active Sessions",
                value: "1,234",
                change: { value: 5.3, type: "decrease" },
                glowColor: "red",
              },
            ]}
          />
        }
        code={gridCode}
      />

      <ComponentPreview
        title="Circular Progress Stat"
        description="Circular progress indicator for displaying metrics and completion."
        preview={
          <div className="flex flex-wrap gap-6">
            <CircularProgressStat
              label="Completion"
              value={75}
              max={100}
              unit="%"
              icon={<Target className="w-6 h-6" />}
              glowColor="cyan"
              size="md"
            />
            <CircularProgressStat
              label="Storage Used"
              value={750}
              max={1000}
              unit="GB"
              glowColor="purple"
              size="lg"
            />
            <CircularProgressStat
              label="Tasks Done"
              value={8}
              max={10}
              glowColor="green"
              size="sm"
            />
          </div>
        }
        code={circularCode}
      />
    </div>
  );
}

