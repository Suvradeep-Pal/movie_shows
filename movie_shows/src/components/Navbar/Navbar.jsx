import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./dropdown.css";
import Dropdown from "./Dropdown.jsx";
import CustomDialog from "./CustomDialog.jsx";
import SigninContent from "./SigninContent.jsx";
import AboutContent from "./AboutContent.jsx";
import ContactContent from "./ContactContent.jsx";
// import { useNavigate } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Sign In",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/#",
  },
];

const Navbar = () => {
  const [value, setValue] = useState();
  const [openProfile, setOpenProfile] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  // const navigate = useNavigate();
  return (
    <div>
      <AppBar sx={{ background: "#FF9100" }}>
        <Toolbar>
          <LiveTvIcon sx={{ fontSize: "40px" }} />
          <Tabs
            sx={{
              marginLeft: 20,
              padding: "5px",
              "& .MuiTabs-indicator": { backgroundColor: "white" },
            }}
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab sx={{ fontSize: "23px", marginLeft: "60px" }} label="Home" />
            <Tab
              sx={{ fontSize: "23px", marginLeft: "60px" }}
              label="Sign In"
              onClick={() => setOpenSignin(true)}
            />
            <Tab
              sx={{ fontSize: "23px", marginLeft: "60px" }}
              label="About"
              onClick={() => setOpenAbout(true)}
            />
            <Tab
              sx={{ fontSize: "23px", marginLeft: "60px" }}
              label="Contact Us"
              onClick={() => setOpenContact(true)}
            />
          </Tabs>
          <AccountCircleIcon
            sx={{ marginLeft: "auto", fontSize: "40px", cursor: "pointer" }}
            onClick={() => setOpenProfile((prev) => !prev)}
          />
        </Toolbar>
        {openProfile && <Dropdown />}
      </AppBar>
      <CustomDialog
        openPopup={openSignin}
        onDialogClose={() => setOpenSignin(false)}
      >
        <SigninContent />
      </CustomDialog>
      <CustomDialog
        openPopup={openAbout}
        onDialogClose={() => setOpenAbout(false)}
      >
        <AboutContent />
      </CustomDialog>
      <CustomDialog
        openPopup={openContact}
        onDialogClose={() => setOpenContact(false)}
      >
        <ContactContent />
      </CustomDialog>
    </div>
  );

  // function handleSignIn(){
  //   navigate('/SignIn');
  // }
};

export default Navbar;
