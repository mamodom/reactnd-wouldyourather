import React from 'react';

import withAuthorization from '../containers/Authorized';

import Layout from '../components/Layout';
import Question from '../components/Question';

const QuestionDetails = ({
  match: {
    params: { questionId },
  },
}) => {
  return (
    <Layout>
      <Question id={questionId} key={questionId} />
    </Layout>
  );
};

export default withAuthorization(QuestionDetails);
