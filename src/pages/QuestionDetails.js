import React, { Component } from 'react';
import { connect } from 'react-redux';

import withAuthorization from '../containers/Authorized';

class QuestionDetails extends Component {
  render() {
    return <h1>Question {this.props.id}</h1>;
  }
}

const mapStateToProps = (
  { questions, auth: { currentUser }, users },
  ownProps
) => {
  const id = ownProps.match.params.questionId;
  return {
    ...questions[id],
    currentUser,
    authorAvatar: users[questions[id].author].avatarURL,
  };
};

export default withAuthorization(connect(mapStateToProps)(QuestionDetails));
