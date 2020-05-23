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
  }
}));

export const Sidebar = () => {
  const classes = useStyles();

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
        <ListItem button key="Upload file">
          <ListItemIcon><AttachFileIcon /></ListItemIcon>
          <ListItemText primary="Upload file" />
        </ListItem>
        <ListItem button key="Change unit">
          <ListItemIcon><AssessmentIcon /></ListItemIcon>
          <ListItemText primary="Change unit" />
        </ListItem>
      </List>
    </Drawer>
  );

  return sidebar;
};

export default Sidebar;