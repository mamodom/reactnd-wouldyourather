import React from 'react';
import { connect } from 'react-redux';

const Option = ({ id, text, totalAnswers, answer }) => {
  if (answer)
    return (
      <div
        style={{
          border: '1px solid red',
          background: answer === id ? 'blue' : 'none',
        }}
      >
        {text}
      </div>
    );
  return <div style={{ border: '1px solid green' }}>{text}</div>;
};

const Options = ({ optionOne, optionTwo, answer }) => {
  const totalAnswers = optionOne.votes.length + optionTwo.votes.length;

  return (
    <ul style={{ border: '1px solid red' }}>
      <li>
        <Option {...optionOne} totalAnswers={totalAnswers} answer={answer} />
      </li>
      <li>
        <Option {...optionTwo} totalAnswers={totalAnswers} answer={answer} />
      </li>
    </ul>
  );
};

const Question = ({ question, answer, author }) => {
  return (
    <div style={{ display: 'flex', border: '1px solid pink' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '1em',
        }}
      >
        <img
          src={author.avatarURL}
          alt={`${author.id} avatar`}
          style={{ borderRadius: '50%' }}
        />
        <span>{author.name} </span>
      </div>
      <div
        style={{
          border: '1px solid green',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <div>Would you rather?</div>
        <Options {...question} answer={answer} />
        <div style={{ border: '1px solid red' }}>
          {new Date(question.timestamp).toDateString()}
        </div>
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps)(Question);
