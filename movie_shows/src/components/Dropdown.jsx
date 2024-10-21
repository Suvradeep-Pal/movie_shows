import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Dropdown.css";

export const Dropdown = (props) => {
  const [category, setCategory] = React.useState("");
  const { onChange } = props;

  const handleChange = (event) => {
    setCategory(event.target.value);
    onChange(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minwidth: 300 }} className="custom-select">
        <Select
          value={category}
          displayEmpty
          onChange={handleChange}
          input={<OutlinedInput />}
          className="drop"
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "hwb(0 89% 7%)",
                "& .MuiMenuItem-root": {
                  color: "rgb(37, 36, 36)",
                },
                "& .MuiMenuItem-root.Mui-selected": {
                  backgroundColor: "rgba(37, 36, 36,0.6)",
                  color: "white",
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "rgba(37, 36, 36,0.6)",
                  color: "white",
                },
              },
            },
          }}
        >
          <MenuItem disabled value="">
            <b>Category</b>
          </MenuItem>
          <MenuItem value={"Action"}>Actions</MenuItem>
          <MenuItem value={"Comedy"}>Comedy</MenuItem>
          <MenuItem value={"Drama"}>Dramas</MenuItem>
          <MenuItem value={"Horror"}>Horror</MenuItem>
          <MenuItem value={"Series"}>Series</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
