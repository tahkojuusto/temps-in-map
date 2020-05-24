import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ListItemText from '@material-ui/core/ListItemText';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default
  },
  fileInput: {
    display: 'none'
  }
}));

export const Sidebar = ({ uploadTemperatures, changeIsCelsius, isCelsius }) => {
  const classes = useStyles();

  const uploadJsonFile = event => {
    uploadTemperatures(event.target.files[0]);
  };

  const changeUnit = event => {
    changeIsCelsius(!isCelsius);
  }

  const sidebar = (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <div className={classes.header}>
        <h3>Temps in a Map <BeachAccessIcon /> </h3>
      </div>
      <Divider />
      <List>
        <input
          accept="application/json"
          className={classes.fileInput}
          id="file-upload-button"
          type="file"
          onChange={uploadJsonFile}
        />
        <label htmlFor="file-upload-button">
          <ListItem button key="Upload file">
            <ListItemIcon><AttachFileIcon /></ListItemIcon>
            <ListItemText primary="Upload file" />
          </ListItem>
        </label>
        <ListItem button onClick={changeUnit} key="Change unit">
          <ListItemIcon><AssessmentIcon /></ListItemIcon>
          <ListItemText primary="Change unit" />
        </ListItem>
      </List>
    </Drawer>
  );

  return sidebar;
};

export default Sidebar;