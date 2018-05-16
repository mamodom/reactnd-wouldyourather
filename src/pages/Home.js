import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from '../components/Question';
import UserHeader from '../components/UserHeader';

import { fetchQuestions } from '../actions';
import withAuthorization from '../containers/Authorized';

class Home extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        <UserHeader />
        <h1>Home</h1>
        {this.props.unanswered.map(id => <Question id={id} key={id} />)}
        <hr />
        {this.props.answered.map(id => <Question id={id} key={id} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ users, auth, questions }) => {
  const { id, name, avatarURL, answers = {} } = users[auth.currentUser] || {};

  const sortedQuestionIds = Object.values(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(q => q.id);

  const answered = sortedQuestionIds.filter(id => id in answers);
  const unanswered = sortedQuestionIds.filter(id => !(id in answers));
  return {
    userId: id,
    name,
    avatarURL,
    answered,
    unanswered,
  };
};

export default withAuthorization(
  connect(mapStateToProps, {
    fetchQuestions,
  })(Home)
);
