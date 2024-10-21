import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Navbar />
          <Routes>
            <Route path="/movie/:id" element={<Movies />}></Route>
            <Route path="/" element={<Movies />}></Route>
          </Routes>
        </LocalizationProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
