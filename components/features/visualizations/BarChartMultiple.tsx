"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Define entry type
type Entry = {
  id: string;
  type: string;
  name: string;
  amount: number;
  date: Date;
  paid: boolean | null;
  userId: string;
  createdAt: Date;
};

// Define component props
type BarChartProps = {
  entries: Entry[];
  filterType?: string | string[]; // Filter by entry type(s)
};

// Define chart configuration
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function BarChartMultiple({
  entries,
  filterType,
}: BarChartProps & {
  filterType?: string | string[];
}) {
  // Handle filtering by entry type
  let filteredEntries = entries;
  if (filterType) {
    const types = Array.isArray(filterType) ? filterType : [filterType];
    filteredEntries = filteredEntries.filter((e) => types.includes(e.type));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expenses Overview</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={filteredEntries}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default BarChartMultiple;
