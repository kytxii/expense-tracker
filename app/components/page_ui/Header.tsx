"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";

import EntryButton from "../features/entries/EntryButton";
import Calendar from "./Calendar";

import calendarImage from "../../../public/calendar.png";

const Header = () => {
  const [range, setRange] = useState("Current");
  const [open, setOpen] = useState(false);

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
    <div className="flex fixed top-0 left-64 right-0 h-19 bg-[var(--bg-component)] items-center justify-between px-10 py-3">
      {/* Date range dropdown */}
      <div className="flex items-center">
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="mr-2 rounded-md px-3 py-2 bg-[var(--bg-primary)] text-[var(--bg-primary-inverted)] focus:outline-none hover:bg-[var(--bg-third)]"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {/* Calender widget */}
        <div
          className="text-[var(--bg-primary-inverted)] p-1.5 rounded-md hover:bg-[var(--bg-third)] cursor-pointer transition-colors duration-200"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Image
            src={calendarImage}
            width={30}
            height={30}
            alt="Calendar widget"
            className="filter invert"
          />
        </div>
        {/* If open, render the calendar modal */}
        {open && (
          <div className="absolute top-24 left-5 z-50">
            <Calendar />
          </div>
        )}
      </div>
      <div className="text-2xl text-[var(--bg-primary-inverted)]">
        {rangeText}
      </div>

      {/* Add button and account */}
      <div className="flex items-center gap-30">
        <EntryButton />
        <div className="bg-[var(--bg-secondary)] h-12 w-12 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
