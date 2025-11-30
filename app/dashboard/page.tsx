import React from "react";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "../../lib/prisma";
import { redirect } from "next/navigation";

import Header from "../components/page_ui/Header";
import Sidebar from "../components/page_ui/Sidebar";
import Footer from "../components/page_ui/Footer";
import TotalAmount from "../components/features/visualizations/TotalAmount";
import BarChart from "../components/features/visualizations/BarChart";
import DataTable from "../components/page_ui/DataTable";

const summaryTitles = [
  { label: "Total Income" },
  { label: "Total Expenses" },
  { label: "Total Subscriptions" },
  { label: "Total Bills" },
];

const DashboardPage = async () => {
  const { userId } = await auth();

  {
    /* If user is not logged in, redirect to login page */
  }
  if (!userId) {
    return redirect("/sign-in");
  }

  {
    /* Get all entries for the user */
  }
  const entries = await prisma.entry.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 h-screen sticky top-0">
        <Sidebar />
      </aside>

      {/* Main Section */}
      <div className="flex flex-col flex-1 ">
        {/* Header */}
        <header>
          <Header />
        </header>

        {/* Content */}
        <main className="flex flex-col p-10 justify-center mt-4">
          <div className="flex flex-row justify-between">
            {summaryTitles.map((item) => (
              <TotalAmount key={item.label} title={item.label} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <BarChart />
          </div>
          {/* Header row */}
          <div className="flex w-full mb-2 gap-2 mt-10">
            <span className="w-1/2 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
              Name
            </span>
            <span className="w-1/4 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
              Date
            </span>
            <span className="w-1/4 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
              Amount
            </span>
          </div>
          <div className="bg-[var(--bg-component)] rounded-md p-2 ">
            <DataTable entries={entries} />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[var(--bg-component)] h-50 mt-100 flex items-center justify-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;
