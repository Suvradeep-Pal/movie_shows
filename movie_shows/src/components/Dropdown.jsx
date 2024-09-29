import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Dropdown.css";

export const Dropdown = () => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minwidth: 300 }}>
        <Select
          value={category}
          displayEmpty
          onChange={handleChange}
          input={<OutlinedInput />}
          className="drop"
        >
          <MenuItem disabled value="">
            <b>Category</b>
          </MenuItem>
          <MenuItem value={1}>Action</MenuItem>
          <MenuItem value={2}>Comedy</MenuItem>
          <MenuItem value={3}>Dramas</MenuItem>
          <MenuItem value={4}>Horror</MenuItem>
          <MenuItem value={5}>Series</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
