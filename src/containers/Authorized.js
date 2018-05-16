import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default Child => {
  const mapStateToProps = ({ auth: { currentUser } }) => ({ currentUser });

  const authorized = ({ currentUser, dispatch, ...otherProps }) =>
    currentUser === '' ? <Redirect to="/signin" /> : <Child {...otherProps} />;

  authorized.displayName = `Authorize(${Child.displayName})`;

  return connect(mapStateToProps)(authorized);
};
