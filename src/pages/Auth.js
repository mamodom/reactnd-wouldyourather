import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class Auth extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h1>Auth</h1>
        <form onSubmit={this.props.login}>
          <select name="username" id="username">
            {Object.keys(this.props.users || {}).map(userId => (
              <option value={userId} key={userId}>
                {this.props.users[userId].name}
              </option>
            ))}
          </select>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  fetchUsers,
})(Auth);
