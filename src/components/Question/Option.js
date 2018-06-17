import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const Option = ({
  classes: {
    root,
    withResults,
    percentageBar,

    selectedPercentageBar,
    optionText,
  },
  id,
  text,
  votes,
  totalAnswers,
  answer,
}) => {
  if (!answer)
    return (
      <Button className={root} variant="outlined">
        {text}
      </Button>
    );

  const percentage = `${(100 * votes.length) / totalAnswers}%`;

  return (
    <div className={withResults}>
      <span className={optionText}>{text}</span>
      <span
        className={id === answer ? selectedPercentageBar : percentageBar}
        style={{
          width: percentage,
        }}
      />
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <span style={{ zIndex: 1 }}>
          {votes.length} vote{votes.length === 1 ? '' : 's'}
        </span>
        <span style={{ zIndex: 1 }}>{percentage}</span>
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
  };
};

export default withStyles(styles)(Option);
