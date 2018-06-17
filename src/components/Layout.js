import React from 'react';
import { withStyles } from '@material-ui/core';

import Header from './Header';
import SideBar from './SideBar';

const Layout = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <Header />
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default withStyles(styles)(Layout);
