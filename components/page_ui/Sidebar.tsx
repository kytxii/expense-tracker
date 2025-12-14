"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../../public/logo.png";
import settings from "../../public/settings.png";
import calendar from "../../public/calendar.png";
import {
  LayoutDashboard,
  BanknoteArrowUp,
  BanknoteArrowDown,
  ReceiptText,
  Landmark,
  PiggyBank,
  CalendarSync,
  HandCoins,
} from "lucide-react";

const sidebarIcons = [
  { label: "Dashboard", icon: LayoutDashboard, size: 25 },
  { label: "Income", icon: BanknoteArrowUp, size: 25 },
  { label: "Expenses", icon: BanknoteArrowDown, size: 25 },
  { label: "Subscriptions", icon: CalendarSync, size: 25 },
  { label: "Bills", icon: ReceiptText, size: 25 },
  { label: "Debt", icon: Landmark, size: 25 },
  { label: "Savings", icon: PiggyBank, size: 25 },
  { label: "Reimbursements", icon: HandCoins, size: 25 },
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

    return `${
      isSelected ? "bg-[var(--bg-third)]" : ""
    } hover:bg-[var(--bg-third)]`;
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 p-4 flex flex-col bg-[var(--bg-component)] overflow-hidden">
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
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${getButtonColor(
                item.label
              )}`}
              onClick={() => setSelectedItem(item.label)}
            >
              <item.icon size={item.size} />
              <span>{item.label}</span>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Settings (bottom) */}
      <div className="mt-auto border-t border-[var(--bg-secondary)] pt-4">
        <button className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-[var(--bg-third)] w-full text-left cursor-pointer">
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
