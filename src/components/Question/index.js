import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Typography,
  withStyles,
  Avatar,
  Card,
  CardContent,
} from '@material-ui/core';

import Options from './Options';

const Question = ({
  classes: { avatar, body, content, postInfo, root, title },
  question,
  answer,
  author,
}) => (
  <Card className={root}>
    <CardContent className={content}>
      <div className={postInfo}>
        <Avatar
          className={avatar}
          src={author.avatarURL}
          alt={`${author.id} avatar`}
        />
        <Typography>{author.name}</Typography>

        <Link to={`/questions/${question.id}`}>
          <Typography color="textSecondary">
            {new Date(question.timestamp).toDateString()}
          </Typography>
        </Link>
      </div>
      <div className={body}>
        <Typography className={title} variant="headline">
          Would you rather?
        </Typography>
        <Options {...question} answer={answer} />
      </div>
    </CardContent>
  </Card>
);

const styles = theme => ({
  root: {
    maxWidth: '45em',
    minWidth: '30em',
    alignSelf: 'stretch',
  },
  content: {
    display: 'flex',
  },
  postInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '1.5em',
  },
  avatar: {
    height: 75,
    width: 75,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    alignSelf: 'center',
  },
});

const mapStateToProps = (
  { questions, users, auth: { currentUser } },
  ownProps
) => {
  const question = questions[ownProps.id];
  const user = users[currentUser];
  return {
    question,
    currentUser: user,
    author: users[question.author],
    answer: user.answers[question.id],
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Question));
