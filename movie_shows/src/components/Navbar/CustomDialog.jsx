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
        <DialogTitle>
          <div></div>
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

export default CustomDialog;
