"use client";
import React, { useState } from "react";

import Header from "../components/page_ui/Header";
import Sidebar from "../components/page_ui/Sidebar";
import RemainderChart from "../components/features/visualizations/RemainderChart";
import PaidToggle from "../components/features/entries/PaidToggle";

const tempDB = [
  { name: "Salary", amount: "$3,200.00", date: "11/01/2025" },
  { name: "Freelance", amount: "$850.00", date: "10/27/2025" },
  { name: "Stock Dividend", amount: "$120.50", date: "10/15/2025" },
  { name: "Interest", amount: "$5.34", date: "10/01/2025" },
  { name: "Gift", amount: "$200.00", date: "09/30/2025" },
  { name: "Refund", amount: "$45.99", date: "09/20/2025" },
  { name: "Side Hustle", amount: "$180.00", date: "09/18/2025" },
  { name: "Bonus", amount: "$500.00", date: "08/31/2025" },
  { name: "Rental Income", amount: "$1,100.00", date: "08/01/2025" },
  { name: "Sale", amount: "$60.00", date: "07/22/2025" },
];

const IncomePage = () => {
  const [paidStates, setPaidStates] = useState(
    Array(tempDB.length).fill(false)
  );

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 flex-shrink-0 h-screen sticky top-0">
        <Sidebar />
      </aside>

      {/* Main column */}
      <div className="flex flex-col w-full h-full">
        <header>
          <Header />
        </header>

        {/* Content */}
        <div className="flex flex-row w-full justify-between items-start flex-grow p-10 mt-19 gap-10">
          <div className="bg-[var(--bg-component)] w-[50%] self-start text-[var(--bg-primary-inverted)] rounded-md p-2">
            <RemainderChart />
          </div>

          <div className="flex flex-col w-[49%]">
            {/* Header row */}
            <div className="flex w-full mb-2 gap-2">
              <span className="w-2/5 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                Name
              </span>
              <span className="w-1/5 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                Amount
              </span>
              <span className="w-1/5 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                Date
              </span>
              <span className="w-1/5 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                Status
              </span>
            </div>

            {/* Table body */}
            <div className="bg-[var(--bg-component)] rounded-md p-2">
              <table className="w-full text-[var(--bg-primary-inverted)]">
                <tbody>
                  {tempDB.map((item, index) => {
                    const paid = paidStates[index];
                    return (
                      <tr
                        key={index}
                        className="odd:bg-[var(--bg-primary)] even:bg-[var(--bg-secondary)]"
                      >
                        <td className="w-2/5 p-3">{item.name}</td>
                        <td className="w-1/5 p-3">{item.amount}</td>
                        <td className="w-1/5 p-3">{item.date}</td>
                        <td className="w-1/5">
                          <div className="flex justify-center scale-75">
                            <PaidToggle />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomePage;
