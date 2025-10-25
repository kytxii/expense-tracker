import React from "react";
import Image from "next/image";

import logo from "../../../public/logo.png";
import dashboard from "../../../public/dashboard.png";
import income from "../../../public/income.png";
import expense from "../../../public/expense.png";
import subscription from "../../../public/subscription.png";
import bills from "../../../public/bills.png";
import debt from "../../../public/bills.png";
import savings from "../../../public/bills.png";
import reimbursements from "../../../public/bills.png";
import settings from "../../../public/settings.png";

const sidebarItems = [
  { label: "Dashboard", icon: dashboard, size: 25 },
  { label: "Income", icon: income, size: 25 },
  { label: "Expenses", icon: expense, size: 25 },
  { label: "Subscriptions", icon: subscription, size: 25 },
  { label: "Bills", icon: bills, size: 25 },
  { label: "Debt", icon: debt, size: 25 },
  { label: "Savings", icon: savings, size: 25 },
  { label: "Reimbursements", icon: reimbursements, size: 25 },
];

const Sidebar = () => {
  return (
    <aside className="h-full w-64  p-4 flex flex-col">
      {/* Logo and title */}
      <a href="/dashboard">
        <div className="flex items-center gap-3 mb-10">
          <Image src={logo} width={40} height={40} alt="Logo" />
          <h1 className="text-xl font-bold">Expense Tracker</h1>
        </div>
      </a>

      {/* Main nav */}
      <nav className="flex-1">
        <ul className="space-y-3">
          {sidebarItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors"
            >
              <Image
                src={item.icon}
                width={item.size}
                height={item.size}
                alt={item.label}
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Settings (bottom) */}
      <div className="mt-auto border-t border-slate-300 pt-4">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 w-full text-left cursor-pointer">
          <Image src={settings} width={20} height={20} alt="Settings" />
          Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
