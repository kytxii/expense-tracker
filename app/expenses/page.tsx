import React from "react";

import Header from "../components/page_ui/Header";
import Sidebar from "../components/page_ui/Sidebar";

const IncomePage = () => {
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Header />
        </div>
      </div>
    </>
  );
};

export default IncomePage;
