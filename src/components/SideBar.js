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
import { push } from 'connected-react-router';
import connect from 'react-redux/lib/connect/connect';

const SideBar = ({ classes, push }) => {
  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar} />
      <List>
        <ListItem button onClick={() => push('/')}>
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Questions" />
        </ListItem>
        <ListItem button onClick={() => push('/add')}>
          <ListItemIcon>
            <AddBox />
          </ListItemIcon>
          <ListItemText primary="Create a Question" />
        </ListItem>
        <ListItem button onClick={() => push('/leaderboard')}>
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

export default connect(
  () => ({}),
  { push }
)(withStyles(styles)(SideBar));
