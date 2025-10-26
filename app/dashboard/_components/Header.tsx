"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import calendar from "../../../public/calendar.png";

const Header = () => {
  const [range, setRange] = useState("Last Month");

  const options = [
    "Current",
    "Last 7 Days",
    "Last Month",
    "Last 3 Months",
    "Last 6 Months",
    "Last Year",
  ];

  const rangeText = useMemo(() => {
    const today = new Date();

    const startOfMonth = (d: Date) =>
      new Date(d.getFullYear(), d.getMonth(), 1);
    const endOfMonth = (d: Date) =>
      new Date(d.getFullYear(), d.getMonth() + 1, 0);

    const getRangeDates = (r: string) => {
      let start: Date;
      let end: Date;

      switch (r) {
        case "Current":
          start = startOfMonth(today);
          end = endOfMonth(today);
          break;
        case "Last 7 Days":
          start = new Date(today);
          start.setDate(start.getDate() - 7);
          end = today;
          break;
        case "Last Month":
          start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          end = new Date(today.getFullYear(), today.getMonth(), 0);
          break;
        case "Last 3 Months":
          start = new Date(today.getFullYear(), today.getMonth() - 3, 1);
          end = new Date(today.getFullYear(), today.getMonth(), 0);
          break;
        case "Last 6 Months":
          start = new Date(today.getFullYear(), today.getMonth() - 6, 1);
          end = new Date(today.getFullYear(), today.getMonth(), 0);
          break;
        case "Last Year":
          start = new Date(today.getFullYear() - 1, 0, 1);
          end = new Date(today.getFullYear() - 1, 11, 31);
          break;
        default:
          start = today;
          end = today;
      }

      return { start, end };
    };

    const { start, end } = getRangeDates(range);

    const monthDay = (d: Date) =>
      new Intl.DateTimeFormat(undefined, {
        month: "long",
        day: "numeric",
      }).format(d);
    const monthYear = (d: Date) =>
      new Intl.DateTimeFormat(undefined, {
        month: "long",
        year: "numeric",
      }).format(d);

    if (
      start.getMonth() === end.getMonth() &&
      start.getFullYear() === end.getFullYear()
    )
      return `${monthDay(start)} – ${monthDay(end)}, ${end.getFullYear()}`;

    if (range === "Last 7 Days")
      return `${monthDay(start)} – ${monthDay(end)}, ${end.getFullYear()}`;

    return `${monthYear(start)} – ${monthYear(end)}`;
  }, [range]);

  return (
    <div className="flex w-full bg-white items-center justify-between px-10 py-3">
      {/* Date range dropdown */}
      <div className="flex items-center">
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="mr-4 border border-slate-300 rounded px-2 py-1 bg-white text-black focus:outline-none"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {/* Calender widget */}
        <div className="text-white px-1 py-1 mr-2 rounded-lg hover:bg-gray-400 cursor-pointer transition-colors">
          <Image src={calendar} width={30} height={30} alt="Calendar widget" />
        </div>

        <div className="text-2xl text-black ml-80">{rangeText}</div>
      </div>

      {/* Add button and account */}
      <div className="flex items-center gap-30">
        <button>
          <div className="bg-blue-400 pr-5 pl-5 p-2 rounded-lg hover:bg-blue-300 cursor-pointer">
            Add Entry
          </div>
        </button>
        <div className="bg-blue-300 h-10 w-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
