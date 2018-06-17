import React from 'react';
import { Typography, Toolbar, AppBar, withStyles } from '@material-ui/core';

import CurrentUser from './CurrentUser';

const Header = ({ classes }) => {
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Would you rather?
        </Typography>
      </Toolbar>
      <CurrentUser />
    </AppBar>
  );
};

const styles = theme => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
};

export default withStyles(styles)(Header);
