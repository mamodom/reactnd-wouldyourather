import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Question from '../components/Question';
import UserHeader from '../components/UserHeader';
import Layout from '../components/Layout';

import { fetchQuestions } from '../actions';
import withAuthorization from '../containers/Authorized';

class Home extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <Layout>
        <h1>Home</h1>
        {this.props.unanswered.map(id => <Question id={id} key={id} />)}
        <hr />
        {this.props.answered.map(id => <Question id={id} key={id} />)}
      </Layout>
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
  connect(
    mapStateToProps,
    {
      fetchQuestions,
    }
  )(Home)
);
