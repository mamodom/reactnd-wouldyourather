import React from 'react';
import { withStyles, Avatar } from '@material-ui/core';

const CurrentUser = ({ classes }) => (
  <Avatar
    src="https://randomuser.me/api/portraits/women/39.jpg"
    className={classes.avatar}
  />
);

const styles = theme => ({
  avatar: { alignSelf: 'center', marginRight: '1em' },
});

export default withStyles(styles)(CurrentUser);
