import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTime } from "luxon";
import "./Calender.css";

export const Calender = (props) => {
  const { onChange } = props;

  const [selectedDate, setSelectedDate] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="calender">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          style={{ backgroundColor: "white" }}
          value={selectedDate}
          format="dd/MM/yyyy"
          onChange={(newDate) => {
            setSelectedDate(newDate);
            onChange(DateTime.fromJSDate(newDate));
            handleClose();
          }}
          onClose={handleClose}
          renderInput={(params) => <TextField />}
        />
      </LocalizationProvider>
    </div>
  );
};
