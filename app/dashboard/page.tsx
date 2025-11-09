import React from "react";

import Header from "../components/page_ui/Header";
import Sidebar from "../components/page_ui/Sidebar";
import Footer from "../components/page_ui/Footer";
import TotalAmount from "../components/numbers/TotalAmount";
import BarChart from "../components/charts/BarChart";

const summaryTitles = [
  { label: "Total Income" },
  { label: "Total Expenses" },
  { label: "Total Subscriptions" },
  { label: "Total Bills" },
];

const DashboardPage = () => {
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
        <main className="flex flex-col p-10 justify-center mt-19">
          <div className="flex flex-row justify-between bg-[var(--bg-comp)] p-2 rounded-lg">
            {summaryTitles.map((item) => (
              <TotalAmount key={item.label} title={item.label} />
            ))}
          </div>
          <div className="flex justify-center mt-10 bg-[var(--bg-comp)] p-2 rounded-lg">
            <BarChart />
          </div>
        </main>

        {/* Footer */}
        {/* <footer className="bg-white h-12 flex items-center justify-center border-t-2 border-slate-300">
          <Footer />
        </footer> */}
      </div>
    </div>
  );
};

export default DashboardPage;
