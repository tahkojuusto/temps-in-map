import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ListItemText from "@material-ui/core/ListItemText";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },
  fileInput: {
    display: "none",
  },
}));

// Navigation bar on the left with temperature file upload and unit change buttons.
export const Sidebar = ({ uploadTemperatures, changeIsCelsius, isCelsius }) => {
  const classes = useStyles();

  const uploadJsonFile = (event) => {
    uploadTemperatures(event.target.files[0]);
  };

  // eslint-disable-next-line no-unused-vars
  const changeUnit = (event) => {
    changeIsCelsius(!isCelsius);
  };

  const sidebar = (
    <Drawer variant="permanent" anchor="left">
      <div className={classes.header}>
        <h3>
          Temps in a Map <BeachAccessIcon />
        </h3>
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
            <ListItemIcon>
              <AttachFileIcon />
            </ListItemIcon>
            <ListItemText primary="Upload file" />
          </ListItem>
        </label>
        <ListItem button onClick={changeUnit} key="Change unit">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Change unit" />
        </ListItem>
      </List>
    </Drawer>
  );

  return sidebar;
};

Sidebar.propTypes = {
  uploadTemperatures: PropTypes.func.isRequired,
  changeIsCelsius: PropTypes.func.isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default Sidebar;
