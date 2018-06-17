import React from 'react';
import { withStyles } from '@material-ui/core';

import Option from './Option';

const Options = ({
  classes: { options },
  id,
  optionOne,
  optionTwo,
  answer,
}) => {
  const totalAnswers = optionOne.votes.length + optionTwo.votes.length;
  return (
    <div className={options}>
      <Option
        id="optionOne"
        questionId={id}
        {...optionOne}
        totalAnswers={totalAnswers}
        answer={answer}
      />
      <Option
        id="optionTwo"
        questionId={id}
        {...optionTwo}
        totalAnswers={totalAnswers}
        answer={answer}
      />
    </div>
  );
};

const styles = {
  options: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default withStyles(styles)(Options);
