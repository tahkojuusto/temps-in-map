import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

// Notification popup in the case of API call.
export const Notification = ({ message, timeout }) => {
  const classes = useStyles();

  // Is the popup currently visible.
  const [open, setOpen] = useState(true);

  // Show the notification when message changes.
  useEffect(() => {
    setOpen(true);
  }, [message]);

  // eslint-disable-next-line no-unused-vars
  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const notification = (
    <div className={classes.root}>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={timeout}>
        <MuiAlert
          onClose={handleClose}
          elevation={6}
          variant="filled"
          severity={message.ok ? "success" : "error"}
        >
          {message.text}
        </MuiAlert>
      </Snackbar>
    </div>
  );

  return notification;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired,
};

export default Notification;
