import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const sidebarIcons = [
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
  // Handle button hover colors
  const getHoverColor = (label: string) => {
    switch (label) {
      case "Dashboard":
        return "hover:bg-cyan-100";
      case "Income":
        return "hover:bg-green-100";
      case "Expenses":
        return "hover:bg-red-100";
      case "Subscriptions":
        return "hover:bg-indigo-100";
      case "Bills":
        return "hover:bg-blue-100";
      case "Debt":
        return "hover:bg-slate-100";
      case "Savings":
        return "hover:bg-slate-100";
      case "Reimbursements":
        return "hover:bg-slate-100";
      default:
        return "hover:bg-slate-100";
    }
  };

  // Handle routes to other pages
  const getButtonRoute = (label: string) => {
    switch (label) {
      case "Dashboard":
        return "/dashboard";
      case "Income":
        return "/income";
      case "Expenses":
        return "/expenses";
      case "Subscriptions":
        return "/subscriptions";
      case "Bills":
        return "/bills";
      case "Debt":
        return "/debt";
      case "Savings":
        return "/savings";
      case "Reimbursements":
        return "/reimbursements";
      default:
        return "/dashboard";
    }
  };

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
          {sidebarIcons.map((item) => (
            <Link
              key={item.label}
              href={getButtonRoute(item.label)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${getHoverColor(
                item.label
              )}`}
            >
              <Image
                src={item.icon}
                width={item.size}
                height={item.size}
                alt={item.label}
              />
              <button>
                <span>{item.label}</span>
              </button>
            </Link>
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
