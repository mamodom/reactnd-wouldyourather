import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  TextField,
  withStyles,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';

import Layout from '../components/Layout';
import { addQuestion } from '../actions';
import withAuthorization from '../containers/Authorized';

class AddQuestion extends Component {
  state = {
    optionOne: { value: '', error: false },
    optionTwo: { value: '', error: false },
  };

  handleChange = field => e =>
    this.setState({ [field]: { value: e.target.value, error: false } });

  handleSubmit = e => {
    let hasError = false;

    Object.keys(this.state).forEach(key => {
      if (!this.state[key].value) {
        this.setState({ [key]: { error: true, value: '' } });
        hasError = true;
      }
    });

    if (hasError) return;

    this.props.addQuestion({
      optionOneText: this.state.optionOne.value,
      optionTwoText: this.state.optionTwo.value,
    });
  };

  render() {
    return (
      <Layout>
        <Card className={this.props.classes.root}>
          <CardContent className={this.props.classes.content}>
            <Typography variant="headline" className={this.props.classes.title}>
              Would you rather...?
            </Typography>
            <div className={this.props.classes.body}>
              <TextField
                error={this.state.optionOne.error}
                className={this.props.classes.input}
                value={this.state.optionOne.value}
                onChange={this.handleChange('optionOne')}
              />
              <Typography className={this.props.classes.separator}>
                or
              </Typography>
              <TextField
                error={this.state.optionTwo.error}
                className={this.props.classes.input}
                value={this.state.optionTwo.value}
                onChange={this.handleChange('optionTwo')}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={this.handleSubmit}>
              Add Question
            </Button>
          </CardActions>
        </Card>
      </Layout>
    );
  }
}

const styles = {
  root: {
    maxWidth: '45em',
    minWidth: '30em',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: { alignSelf: 'center' },
  body: {
    display: 'flex',
    alignItems: 'baseline',
  },
  input: {
    flexGrow: 1,
  },
  separator: {
    paddingLeft: '1em',
    paddingRight: '1em',
  },
};

const mapStateToProps = ({ auth: { currentUser } }) => {
  return {
    currentUser,
  };
};

export default withStyles(styles)(
  withAuthorization(
    connect(
      mapStateToProps,
      {
        addQuestion,
      }
    )(AddQuestion)
  )
);
