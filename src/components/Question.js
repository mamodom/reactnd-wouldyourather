import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = ({ id, author, optionOne, optionTwo, timestamp }) => {
  return (
    <div>
      <h5>Would you rather</h5>
      <span>{optionOne.text}</span>
      <br />
      <span>{optionTwo.text}</span>
      <br />
      <span>{new Date(timestamp).toDateString()} </span>
      <br />
      <Link to={`/questions/${id}`}>Go</Link>
    </div>
  );
};

const mapStateToProps = ({ questions }, ownProps) => ({
  ...questions[ownProps.id],
});

export default connect(mapStateToProps)(Question);
