import React from "react";

import Header from "../components/page_ui/Header";
import Sidebar from "../components/page_ui/Sidebar";
import Footer from "../components/page_ui/Footer";
import SummaryTotal from "../components/numbers/SummaryTotal";
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
      <aside className="">
        <Sidebar />
      </aside>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header>
          <Header />
        </header>

        {/* Content */}
        <main className="flex flex-col p-10 justify-center ">
          <div className="flex flex-row justify-between gap-15 mr-10 ml-10">
            {summaryTitles.map((item) => (
              <SummaryTotal key={item.label} title={item.label} />
            ))}
          </div>
          <div className="flex justify-center m-10 mt-10">
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
