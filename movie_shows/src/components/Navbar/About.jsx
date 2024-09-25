import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const About = (props) => {
  const { title, children, openPopup, setOpenPopup, onDialogClose } = props;
  const [isOpen, setIsOpen] = useState(openPopup);
  useEffect(() => {
    setIsOpen(openPopup);
  }, [openPopup]);
  return (
    <div>
      <Dialog open={isOpen} maxWidth="lg" onClose={handleClose}>
        <DialogTitle>
          <div>About</div>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
  function handleClose() {
    setIsOpen(false);
    onDialogClose();
  }
};
export default About;
