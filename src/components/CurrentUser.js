import React from 'react';
import { withStyles, Avatar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const CurrentUser = ({ classes, name, avatarURL }) => (
  <div className={classes.root}>
    <Typography color="inherit">{name}</Typography>
    <Avatar src={avatarURL} className={classes.avatar} />
  </div>
);

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: { marginRight: '1em', marginLeft: '1em' },
});

const mapStateToProps = ({ users, auth: { currentUser } }) => ({
  ...users[currentUser],
});

export default connect(mapStateToProps)(withStyles(styles)(CurrentUser));
