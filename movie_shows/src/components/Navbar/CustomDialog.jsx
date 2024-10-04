import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import {useNavigate} from 'react-router-dom';

const CustomDialog = (props) => {
  // const navigate = useNavigate();
  const { title, children, openPopup, setOpenPopup, onDialogClose } = props;
  const [isOpen, setIsOpen] = useState(openPopup);
  useEffect(() => {
    setIsOpen(openPopup);
  }, [openPopup]);
  return (
    <div>
      <Dialog open={isOpen} maxWidth="lg" onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "rgb(102, 102, 102)" }}>
          <div></div>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "rgb(102, 102, 102)" }}>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );

  function handleClose() {
    setIsOpen(false);
    onDialogClose();
  }
};

export default CustomDialog;
