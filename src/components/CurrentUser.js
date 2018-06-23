import React, { Fragment, Component } from 'react';
import {
  withStyles,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { connect } from 'react-redux';

import { logout, ensureUserInformationIsAvailable } from '../actions';

class CurrentUser extends Component {
  state = {
    menuOpen: false,
    anchorEl: null,
  };

  componentDidMount() {
    this.props.ensureUserInformationIsAvailable();
  }

  handleClick = e => {
    this.setState({ anchorEl: e.currentTarget, menuOpen: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, menuOpen: false });
  };

  render() {
    const { classes, user, logout } = this.props;

    return user ? (
      <Fragment>
        <div className={classes.root}>
          <Typography color="inherit">{user.name}</Typography>
          <Avatar
            src={user.avatarURL}
            className={classes.avatar}
            onClick={this.handleClick}
          />
        </div>

        <Menu
          open={this.state.menuOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          getContentAnchorEl={null}
          onClose={this.handleClose}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Fragment>
    ) : null;
  }
}

// const CurrentUser = ({ classes, user }) =>
//   ;

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: { marginRight: '1em', marginLeft: '1em' },
});

const mapStateToProps = ({ users, auth: { currentUser } }) => ({
  user: users[currentUser],
});

export default connect(
  mapStateToProps,
  { logout, ensureUserInformationIsAvailable }
)(withStyles(styles)(CurrentUser));
