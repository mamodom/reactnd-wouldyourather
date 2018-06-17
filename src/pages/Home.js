import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from '../components/Question';
import Layout from '../components/Layout';
import CurrentViewSelector from '../components/CurrentViewSelector';

import { fetchQuestions } from '../actions';
import withAuthorization from '../containers/Authorized';

class Home extends Component {
  state = {
    current: 'unanswered',
  };

  changeCurrent = current => {
    this.setState({ current });
  };

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <Layout>
        <div style={{ paddingBottom: 'inherit' }}>
          <CurrentViewSelector
            keyValue="unanswered"
            selected={this.state.current}
            onSelected={this.changeCurrent}
          />
          <CurrentViewSelector
            keyValue="answered"
            selected={this.state.current}
            onSelected={this.changeCurrent}
          />
        </div>
        {this.props[this.state.current].map(id => (
          <Question id={id} key={id} />
        ))}
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
