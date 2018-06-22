import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { fetchUsers, login } from '../actions';

import {
  withStyles,
  Card,
  CardContent,
  Button,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from '@material-ui/core';

class Auth extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  state = {
    selectedUser: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.selectedUser);
  };

  onSelectChange = e => {
    this.setState({
      selectedUser: e.target.value,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        {this.props.currentUser !== '' && <Redirect to={'/'} />}

        <Card>
          <CardContent className={this.props.classes.content}>
            <Typography className={this.props.classes.title} variant="headline">
              Would you rather...?
            </Typography>

            <FormControl className={this.props.classes.input}>
              <InputLabel>User</InputLabel>
              <Select
                onChange={this.onSelectChange}
                value={this.state.selectedUser}
              >
                {Object.values(this.props.users).map(user => (
                  <MenuItem value={user.id} key={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="raised"
              disabled={this.state.selectedUser === ''}
              onClick={this.onSubmit}
              color="primary"
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      height: '100%',
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '12em',
      minWidth: '15em',
      justifyContent: 'center',
    },
    title: {
      alignSelf: 'center',
    },
    input: {
      marginTop: '1.5em',
      marginBottom: '1.5em',
    },
  };
};

export default withStyles(styles)(
  connect(
    ({ users, auth: { currentUser } }) => ({
      users,
      currentUser,
    }),
    {
      fetchUsers,
      login,
    }
  )(Auth)
);
