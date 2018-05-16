import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ name, avatarURL }) => (
  <div>
    <span>Current User: </span>
    <span>{name}</span>
    <img src={avatarURL} alt="avatar" />
  </div>
);

const mapStateToProps = ({ users, auth: { currentUser } }) => ({
  ...users[currentUser],
});

export default connect(mapStateToProps)(UserHeader);
