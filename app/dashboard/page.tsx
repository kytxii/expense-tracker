import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import Footer from "./_components/Footer";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-slate-100 w-64 shadow-[5px_0px_10px_rgba(0,0,0,0.3)] border-r-2 border-slate-300">
        <Sidebar />
      </aside>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-slate-100 h-16 flex items-center border-b-2 border-slate-300">
          <Header />
        </header>

        {/* Content */}
        <main className="flex-1 bg-slate-100 overflow-y-auto p-4">
          {/* Main content goes here */}
        </main>

        {/* Footer */}
        <footer className="bg-slate-100 h-12 flex items-center justify-center border-t-2 border-slate-300">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;
