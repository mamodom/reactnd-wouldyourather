import React from 'react';
import { withStyles } from '@material-ui/core';

import Header from './Header';
import SideBar from './SideBar';

const Layout = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <Header />
      <SideBar />
      <main>
        <div className={classes.toolbar}>{children}</div>
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
});

export default withStyles(styles)(Layout);
