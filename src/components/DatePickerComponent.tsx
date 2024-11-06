"use client"

import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@radix-ui/react-label";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import * as React from "react";

export default function DatePickerComponent() {

    const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (date: Date) => {
    console.log("Selected date:", date);
    // You can set this date to state or use it as needed
    const formattedDate = format(date, "yyyy/MM/dd ");

    setSelectedDate(formattedDate)
  };

  return (
    <div className="">
      <h1>DatePickerComponent</h1>
      <h2 className="my-4">{selectedDate}</h2>
     
      <div className="flex items-center gap-x-2">
      <DatePicker onDateChange={handleDateChange} />
      <Label className="font-bold" htmlFor="terms">تأريخ الكتاب</Label>
      </div>
    </div>
  );
}
