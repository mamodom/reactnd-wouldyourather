import React from 'react';
import { withStyles } from '@material-ui/core';

import Option from './Option';

const Options = ({
  classes: { option, options },
  optionOne,
  optionTwo,
  answer,
  author,
}) => {
  const totalAnswers = optionOne.votes.length + optionTwo.votes.length;
  return (
    <div className={options}>
      <Option
        id="optionOne"
        {...optionOne}
        totalAnswers={totalAnswers}
        answer={answer}
      />
      <Option
        id="optionTwo"
        {...optionTwo}
        totalAnswers={totalAnswers}
        answer={answer}
      />
    </div>
  );
};

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
