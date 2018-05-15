import React from 'react';
import { connect } from 'react-redux';

const Question = ({ id, author, optionOne, optionTwo, timestamp }) => {
  return (
    <div>
      <h5>Would you rather</h5>
      <span>{optionOne.text}</span>
      <br />
      <span>{optionTwo.text}</span>
      <br />
      <span>{new Date(timestamp).toDateString()} </span>
    </div>
  );
};

const mapStateToProps = ({ questions }, ownProps) => ({
  ...questions[ownProps.id],
});

export default connect(mapStateToProps)(Question);
