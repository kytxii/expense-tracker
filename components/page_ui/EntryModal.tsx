import React, { useState } from "react";
import { createPortal } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import {
  Form,
  FormDescription,
  FormLabel,
  FormField,
  FormControl,
  FormItem,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { DatePicker } from "./DatePicker";
import { Switch } from "../ui/switch";

interface EntryModalProps {
  onClose: () => void;
}

const formSchema = z.object({
  type: z.string(),
  name: z.string().min(1, "Name is required"),
  amount: z.number().min(0, "Amount must be positive"),
  date: z.date(),
});

const EntryModal: React.FC<EntryModalProps> = ({ onClose }) => {
  const [manualDate, setManualDate] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "Income",
      name: "",
      amount: 0,
      date: new Date(),
    },
  });

  const entryTypes = [
    "Income",
    "Expenses",
    "Subscriptions",
    "Bills",
    "Debt",
    "Savings",
    "Reimbursements",
  ];

  {
    // Main form submission handler
  }
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed to create entry", await response.text());
        return;
      }

      onClose();
      router.refresh();
    } catch (error) {
      console.error("Error submitting entry", error);
    }
  };

  return createPortal(
    <>
      {/* Content blur (click to close modal) */}
      <div
        className="fixed inset-0 top-19 left-64 right-0 bottom-0 flex items-center justify-center backdrop-blur-xs bg-black/5 z-50"
        onClick={onClose}
      >
        {/* Modal padding (prevent click to close*/}
        <div
          className="bg-[var(--bg-component)] p-2 rounded-md w-100 h-150"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Inner modal content */}
          <div className="flex flex-col p-2 rounded-md w-full h-full gap-2">
            {/* Modal header */}
            <div className="flex justify-center items-center h-[10%] w-full bg-[var(--bg-primary)] p-2 rounded-md text-xl">
              <span>Add a new entry</span>
            </div>
            {/* Modal body */}
            <div className="flex flex-col bg-[var(--bg-primary)] h-full w-full p-5 rounded-md gap-5">
              <Form {...form}>
                {/* Type dropdown form field */}
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-[var(--bg-secondary)] text-[var(--bg-primary-inverted)] hover:bg-[var(--bg-third)] hover:text-[var(--bg-primary-inverted)]">
                            <SelectValue placeholder="Choose entry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {entryTypes.map((entry) => (
                            <SelectItem key={entry} value={entry}>
                              {entry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                {/* Name form field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Entry name"
                          className="bg-[var(--bg-secondary)] text-[var(--bg-primary-inverted)] hover:bg-[var(--bg-third)] hover:text-[var(--bg-primary-inverted)] border-none"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* Amount form field */}
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          step="0.01"
                          placeholder="$0.00"
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="bg-[var(--bg-secondary)] text-[var(--bg-primary-inverted)] hover:bg-[var(--bg-third)] hover:text-[var(--bg-primary-inverted)] border-none"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* Date form field */}
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <div className="flex flex-row justify-between items-center w-full mb-2">
                        <FormLabel>Date</FormLabel>
                        <div className="flex gap-2">
                          <FormLabel htmlFor="manualDate">
                            Enter manually
                          </FormLabel>
                          <Switch
                            id="manualDate"
                            checked={manualDate}
                            onCheckedChange={setManualDate}
                            className="data-[state=checked]:bg-[var(--bg-secondary)] data-[state=unchecked]:bg-[var(--bg-third)]"
                          />
                        </div>
                      </div>
                      {manualDate ? (
                        <DatePicker
                          date={field.value}
                          setDate={field.onChange}
                        />
                      ) : (
                        <div className="relative rounded-md overflow-hidden w-full">
                          {/* Locked overlay with pattern */}
                          <div
                            className="absolute inset-0 z-30"
                            style={{
                              backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 10px,rgba(0, 0, 0, 0.1) 10px,rgba(0, 0, 0, 0.1) 20px)`,
                            }}
                          />
                          {/* Date content */}
                          <div className="relative z-20 bg-[var(--bg-secondary)] text-[var(--bg-primary-inverted)] p-2 pl-4 text-sm">
                            <span>{new Date().toLocaleDateString()}</span>
                          </div>
                        </div>
                      )}
                    </FormItem>
                  )}
                />
              </Form>
            </div>
            {/* Modal footer */}
            <div className="flex bg-[var(--bg-primary)] h-[10%] w-[100%] p-2 rounded-md gap-5">
              <button
                onClick={onClose}
                type="button"
                className="flex justify-center bg-[var(--bg-secondary)] hover:bg-[var(--bg-third)] cursor-pointer w-[100%] p-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={form.handleSubmit(onSubmit)}
                type="button"
                className="flex justify-center bg-[var(--bg-secondary)] hover:bg-[var(--bg-third)] cursor-pointer w-[100%] p-2 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default EntryModal;
