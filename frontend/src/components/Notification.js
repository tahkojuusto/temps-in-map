import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}));

export const Notification = ({ message }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  
  useEffect(() => {
    setOpen(true);
  }, [message]);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const notification = (
    <div className={classes.root}>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
        <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity={message.ok? "success": "error"}>
          {message.text}
        </MuiAlert>
      </Snackbar>
    </div>
  );

  return notification;
};

export default Notification;