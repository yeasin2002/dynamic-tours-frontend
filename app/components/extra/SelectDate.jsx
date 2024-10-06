"use client";
import { Input } from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SelectDate() {
  const [startDate, setStartDate] = useState(new Date());
  const dateRef = useRef(null);

  return (
    <>
      {/* <DatePicker selected={startDate} placeholderText="Select A Day" /> */}
      <input
        type="date"
        ref={dateRef}
        defaultValue={"2002-03-05"}
        minDate={"2002-03-01"}
        maxDate={"2002-03-10"}
        placeholder="hi"
        className="p-2 rounded-md border-2 my-2 border-shadeBlack"
      />
    </>
  );
}
