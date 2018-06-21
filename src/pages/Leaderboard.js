import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  withStyles,
  CardMedia,
} from '@material-ui/core';

import { fetchUsers } from '../actions';
import Layout from '../components/Layout';

class Leaderboard extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <Layout>
        <div className={this.props.classes.root}>
          {this.props.users.map(({ user, questions, answers }, index) => (
            <Card key={user.id} className={this.props.classes.card}>
              <CardMedia
                className={this.props.classes.media}
                image={user.avatarURL}
              />
              <CardContent>
                <div className={this.props.classes.heading}>
                  <Typography variant="headline">{user.name}</Typography>
                  <Typography variant="subheading">{`#${index +
                    1}`}</Typography>
                </div>
                <Typography variant="subheading" color="textSecondary">{`@${
                  user.id
                }`}</Typography>
                <Typography color="textSecondary">
                  Asked: {questions}
                </Typography>
                <Typography color="textSecondary">
                  Answered: {answers}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Layout>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  media: { height: '15em' },
  heading: { display: 'flex', justifyContent: 'space-between' },
  card: {
    width: '20em',
    margin: '0.8em',
  },
};

const mapStateToProps = ({ users }) => ({
  users: Object.keys(users)
    .map(key => ({
      questions: users[key].questions.length,
      answers: Object.keys(users[key].answers).length,
      user: users[key],
    }))
    .sort((a, b) => b.questions + b.answers - (a.questions + a.answers)),
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(withStyles(styles)(Leaderboard));
