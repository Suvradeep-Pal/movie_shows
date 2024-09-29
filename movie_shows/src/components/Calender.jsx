// import React from "react";
// import { TextField, Button } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// export const Calender = () => {
//   const [selectedDate, setSelectedDate] = React.useState(null);
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };
//   return (
//     <div>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <Button variant="contained" onClick={handleOpen}>
//           Open Calendar
//         </Button>

//         <DatePicker
//           label="Select Date"
//           value={selectedDate}
//           onChange={(newDate) => {
//             setSelectedDate(newDate);
//             handleClose();
//           }}
//           open={isOpen}
//           onClose={handleClose}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>
//     </div>
//   );
// };
