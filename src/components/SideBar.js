import React from 'react';
import { InsertChart, ViewList, AddBox } from '@material-ui/icons';
import {
  Drawer,
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const SideBar = ({ classes }) => {
  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Questions" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddBox />
          </ListItemIcon>
          <ListItemText primary="Create a Question" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsertChart />
          </ListItemIcon>
          <ListItemText primary="Leaderboard" />
        </ListItem>
      </List>
    </Drawer>
  );
};

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    width: 250,
  },
});

export default withStyles(styles)(SideBar);
