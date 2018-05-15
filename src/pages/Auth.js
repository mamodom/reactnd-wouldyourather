import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { fetchUsers, login } from '../actions';

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
      <div>
        {this.props.currentUser !== '' && <Redirect to={'/'} />}
        <h1>Auth</h1>
        <form onSubmit={this.onSubmit}>
          <select
            name="username"
            id="username"
            value={this.state.selectedUser}
            onChange={this.onSelectChange}
          >
            <option value="" disabled>
              Select a user
            </option>
            {Object.values(this.props.users).map(user => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button type="submit" disabled={this.state.selectedUser === ''}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ users, auth: { currentUser } }) => ({
    users,
    currentUser,
  }),
  {
    fetchUsers,
    login,
  }
)(Auth);
