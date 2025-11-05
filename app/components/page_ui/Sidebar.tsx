"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = React.useState("Dashboard"); // Default selected item

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

  // Handle button hover and active colors
  const getButtonColor = (label: string) => {
    const route = getButtonRoute(label);
    const isSelected = pathname === route;
    switch (label) {
      case "Dashboard":
        return `${isSelected ? "bg-cyan-950" : ""} hover:bg-cyan-950`;
      case "Income":
        return `${isSelected ? "bg-green-950" : ""} hover:bg-green-950`;
      case "Expenses":
        return `${isSelected ? "bg-red-950" : ""} hover:bg-red-950`;
      case "Subscriptions":
        return `${isSelected ? "bg-indigo-950" : ""} hover:bg-indigo-950`;
      case "Bills":
        return `${isSelected ? "bg-blue-950" : ""} hover:bg-blue-950`;
      case "Debt":
        return `${isSelected ? "bg-slate-950" : ""} hover:bg-slate-950`;
      case "Savings":
        return `${isSelected ? "bg-slate-950" : ""} hover:bg-slate-950`;
      case "Reimbursements":
        return `${isSelected ? "bg-slate-950" : ""} hover:bg-slate-950`;
      default:
        return `${isSelected ? "bg-slate-950" : ""} hover:bg-slate-950`;
    }
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 p-4 flex flex-col bg-[var(--bg-comp)] overflow-hidden">
      {/* Logo and title */}
      <Link href="/dashboard">
        <div className="flex items-center gap-3 mb-10">
          <Image src={logo} width={40} height={40} alt="Logo" />
          <h1 className="text-xl font-bold">Expense Tracker</h1>
        </div>
      </Link>

      {/* Main nav */}
      <nav className="flex-1">
        <ul className="space-y-3">
          {sidebarIcons.map((item) => (
            <Link
              key={item.label}
              href={getButtonRoute(item.label)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${getButtonColor(
                item.label
              )}`}
              onClick={() => setSelectedItem(item.label)}
            >
              <Image
                src={item.icon}
                width={item.size}
                height={item.size}
                alt={item.label}
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Settings (bottom) */}
      <div className="mt-auto border-t border-[var(--bg-secondary)] pt-4">
        <button className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-[var(--bg-primary)] w-full text-left cursor-pointer">
          <Image
            src={settings}
            width={20}
            height={20}
            alt="Settings"
            className="filter invert"
          />
          Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
