import React from "react";

import Header from "../components/page_ui/Header";
import Sidebar from "../components/page_ui/Sidebar";
import RemainderChart from "../components/features/visualizations/RemainderChart";

const tempDB = [
  {
    name: "Groceries",
    amount: "$150.00",
    date: "01/01/2023",
  },
  { name: "Rent", amount: "$1200.00", date: "01/02/2023", progress: "100%" },
  {
    name: "Utilities",
    amount: "$300.00",
    date: "01/03/2023",
  },
  { name: "Internet", amount: "$60.00", date: "01/04/2023", progress: "100%" },
  {
    name: "Transportation",
    amount: "$100.00",
    date: "01/05/2023",
  },
  {
    name: "Dining Out",
    amount: "$200.00",
    date: "01/06/2023",
  },
  {
    name: "Entertainment",
    amount: "$150.00",
    date: "01/07/2023",
  },
  { name: "Clothing", amount: "$250.00", date: "01/08/2023", progress: "30%" },
  { name: "Medical", amount: "$100.00", date: "01/09/2023", progress: "100%" },
  {
    name: "Insurance",
    amount: "$400.00",
    date: "01/10/2023",
  },
  { name: "Savings", amount: "$500.00", date: "01/11/2023", progress: "100%" },
  {
    name: "Gym Membership",
    amount: "$50.00",
    date: "01/12/2023",
  },
  {
    name: "Subscriptions",
    amount: "$30.00",
    date: "01/13/2023",
  },
  {
    name: "Home Maintenance",
    amount: "$200.00",
    date: "01/14/2023",
  },
  { name: "Gifts", amount: "$100.00", date: "01/15/2023", progress: "100%" },
  { name: "Travel", amount: "$800.00", date: "01/16/2023", progress: "20%" },
  {
    name: "Education",
    amount: "$300.00",
    date: "01/17/2023",
  },
  { name: "Pet Care", amount: "$150.00", date: "01/18/2023", progress: "100%" },
  {
    name: "Household Supplies",
    amount: "$75.00",
    date: "01/19/2023",
  },
  {
    name: "Miscellaneous",
    amount: "$50.00",
    date: "01/20/2023",
  },
  {
    name: "Emergency Fund",
    amount: "$200.00",
    date: "01/21/2023",
  },
];

const ExpensesPage = () => {
  return (
    <>
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
                <span className="w-3/5 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                  Name
                </span>
                <span className="w-1/5 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                  Amount
                </span>
                <span className="w-1/5 bg-[var(--bg-component)] rounded-md text-left p-3 text-xl font-bold">
                  Date
                </span>
              </div>

              {/* Table body */}
              <div className="bg-[var(--bg-component)] rounded-md p-2">
                <table className="w-full text-[var(--bg-primary-inverted)]">
                  <tbody>
                    {tempDB.map((item, index) => (
                      <tr
                        key={index}
                        className="odd:bg-[var(--bg-primary)] even:bg-[var(--bg-secondary)]"
                      >
                        <td className="w-3/5 p-3">{item.name}</td>
                        <td className="w-1/5 p-3">{item.amount}</td>
                        <td className="w-1/5 p-3">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpensesPage;
