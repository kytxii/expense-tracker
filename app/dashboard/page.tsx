import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import Footer from "./_components/Footer";
import TotalHeading from "../components/numbers/TotalHeading";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-white w-64 border-r-2 border-slate-300">
        <Sidebar />
      </aside>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-white h-19 flex items-center border-b-2 border-slate-300">
          <Header />
        </header>

        {/* Content */}
        <main className="flex-1 bg-white overflow-y-auto p-5">
          <TotalHeading />
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
