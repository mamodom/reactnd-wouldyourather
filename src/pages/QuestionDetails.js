import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchUsers, fetchQuestions } from '../actions';
import withAuthorization from '../containers/Authorized';

import Layout from '../components/Layout';
import Question from '../components/Question';

class QuestionDetails extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchUsers();
  }

  render() {
    return (
      <Layout>
        <Question
          id={this.props.match.params.questionId}
          key={this.props.match.params.questionId}
        />
      </Layout>
    );
  }
}
export default withAuthorization(
  connect(
    () => ({}),
    { fetchUsers, fetchQuestions }
  )(QuestionDetails)
);
