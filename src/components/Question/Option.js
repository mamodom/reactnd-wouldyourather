import React from 'react';
import { withStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { answerQuestion } from '../../actions';

const Option = ({
  classes: {
    root,
    withResults,
    percentageBar,
    selectedPercentageBar,
    optionText,
    statsContainer,
    stats,
  },
  id,
  text,
  votes,
  totalAnswers,
  answer,
  answerQuestion,
  questionId,
}) => {
  if (!answer)
    return (
      <Button
        className={root}
        variant="outlined"
        onClick={() => {
          answerQuestion(questionId, id);
        }}
      >
        {text}
      </Button>
    );

  const percentage = `${((100 * votes.length) / totalAnswers).toFixed(0)}%`;

  return (
    <div className={withResults}>
      <span className={optionText}>{text}</span>
      <span
        className={id === answer ? selectedPercentageBar : percentageBar}
        style={{
          width: percentage,
        }}
      />
      <div className={statsContainer}>
        <span className={stats}>
          {votes.length} vote{votes.length === 1 ? '' : 's'}
        </span>
        <span className={stats}>{percentage}</span>
      </div>
    </div>
  );
};

const styles = theme => {
  const percentageBar = {
    backgroundColor: 'rgba(0, 0, 0, 0.23)',
    position: 'absolute',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '3px',
    top: 0,
    left: 0,
    zIndex: 0,
  };
  return {
    root: {
      margin: '0.4em',
    },
    withResults: {
      margin: '0.4em',
      border: '1px solid rgba(0, 0, 0, 0.23)',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: '14px',
      fontStretch: '100%',
      fontWeight: '500',
      justifyContent: 'center',
      lineHeight: '19.6px',
      padding: '8px 16px 8px 16px',
      textTransform: 'uppercase',
      position: 'relative',
    },
    percentageBar,
    selectedPercentageBar: {
      ...percentageBar,
      backgroundColor: theme.palette.primary.light,
    },
    optionText: {
      zIndex: 2,
    },
    statsContainer: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',

      alignItems: 'center',
      justifyContent: 'space-between',
    },
    stats: {
      zIndex: 1,
      padding: '0.5em',
    },
  };
};

export default connect(
  () => ({}),
  { answerQuestion }
)(withStyles(styles)(Option));
