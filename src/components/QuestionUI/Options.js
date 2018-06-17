import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const Options = ({
  classes: { option, options },
  question,
  answer,
  author,
}) => (
  <div className={options}>
    <Button className={option} variant="outlined">
      {question.optionOne.text}
    </Button>
    <Button className={option} variant="outlined">
      {question.optionTwo.text}
    </Button>
  </div>
);

const styles = theme => ({
  options: {
    display: 'flex',
    flexDirection: 'column',
  },
  option: {
    margin: '0.4em',
  },
});

export default withStyles(styles)(Options);
