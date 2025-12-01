"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-start font-normal bg-[var(--bg-secondary)] hover:bg-[var(--bg-third)] hover:text-[var(--bg-primary-inverted)] border-none"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(newDate) => {
              setDate(newDate);
              setOpen(false);
            }}
            className="bg-[var(--bg-secondary)] text-[var(--bg-primary-inverted)] hover:text-[var(--bg-primary-inverted)]"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
