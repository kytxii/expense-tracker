"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import EntryButton from "./EntryButton";
import CalendarWidget from "./CalendarWidget";

import { CalendarDays } from "lucide-react";

const Header = () => {
  const [range, setRange] = useState("Current");
  const [show, setShow] = useState(false);

  const options = [
    "Today",
    "Yesterday",
    "Last 7 days",
    "Last 30 days",
    "Month to date",
    "Year to date",
    "Last year",
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
    <div className="flex fixed top-0 left-64 right-0 h-19 bg-[var(--bg-component)] items-center justify-between pr-10 pl-5 py-3">
      {/* Calender widget */}
      <div
        className="text-[var(--bg-primary-inverted)] p-1.5 rounded-md hover:bg-[var(--bg-third)] cursor-pointer transition-colors duration-200"
        onClick={() => setShow((prev) => !prev)}
      >
        <CalendarDays className="h-10" />
      </div>
      {/* Show the calendar modal */}
      {show && (
        <div className="absolute top-24 left-5 z-50">
          <CalendarWidget />
        </div>
      )}
      <div className="text-2xl text-[var(--bg-primary-inverted)]">
        {rangeText}
      </div>

      {/* Add button and account */}
      <div className="flex items-center gap-30">
        <EntryButton />
        <div className="flex justify-center items-center bg-[var(--bg-secondary)] h-12 w-12 rounded-full">
          <UserButton
            appearance={{
              elements: {
                userButtonTrigger: {
                  width: "100%",
                  height: "100%",
                  padding: 0,
                },
                userButtonAvatarBox: {
                  width: "40px",
                  height: "40px",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
