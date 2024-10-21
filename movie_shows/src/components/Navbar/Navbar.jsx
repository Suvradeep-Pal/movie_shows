import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./dropdown.css";
import Dropdown from "./Dropdown.jsx";
import CustomDialog from "./CustomDialog.jsx";
import SigninContent from "./SigninContent.jsx";
import AboutContent from "./AboutContent.jsx";
import ContactContent from "./ContactContent.jsx";

const Navbar = () => {
  const [value, setValue] = useState();
  const [openProfile, setOpenProfile] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname.endsWith("signin")) {
      setOpenSignin(true);
    } else if (location.pathname.endsWith("about")) {
      setOpenAbout(true);
    } else if (location.pathname.endsWith("contact")) {
      setOpenContact(true);
    }
  }, [location.pathname]);

  const handleOpenSignin = () => {
    navigate("/signin");
  };

  const handleOpenAbout = () => {
    navigate("/about");
  };

  const handleOpenContact = () => {
    navigate("/contact");
  };

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
            <Tab sx={{ fontSize: "23px", marginLeft: "130px" }} label="Home" />
            <Tab
              sx={{ fontSize: "23px", marginLeft: "60px" }}
              label="Sign In"
              onClick={handleOpenSignin}
            />
            <Tab
              sx={{ fontSize: "23px", marginLeft: "60px" }}
              label="About"
              onClick={handleOpenAbout}
            />
            <Tab
              sx={{ fontSize: "23px", marginLeft: "60px" }}
              label="Contact Us"
              onClick={handleOpenContact}
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
        onDialogClose={handleSigninDialogClose}
      >
        <SigninContent />
      </CustomDialog>
      <CustomDialog
        openPopup={openAbout}
        onDialogClose={handleAboutDialogClose}
      >
        <AboutContent />
      </CustomDialog>
      <CustomDialog
        openPopup={openContact}
        onDialogClose={handleContactDialogClose}
      >
        <ContactContent />
      </CustomDialog>
    </div>
  );

  function handleSigninDialogClose() {
    setOpenSignin(false);
    navigate("/");
  }

  function handleAboutDialogClose() {
    setOpenAbout(false);
    navigate("/");
  }

  function handleContactDialogClose() {
    setOpenContact(false);
    navigate("/");
  }
};

export default Navbar;
