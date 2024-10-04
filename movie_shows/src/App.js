import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const App = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Navbar />
        <Movies />
      </LocalizationProvider>
    </div>
  );
};

export default App;
