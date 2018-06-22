import React from 'react';
import { withStyles, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NotFound = ({ classes }) => (
  <div className={classes.root}>
    <Card>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="headline">
          404 Not Found
        </Typography>
        <Typography className={classes.title} variant="subheading">
          The requested Url was not found
        </Typography>
        <Typography className={classes.title} variant="subheading">
          Go back to <Link to="/">Would you rather</Link>
        </Typography>
      </CardContent>
    </Card>
  </div>
);

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '12em',
    minWidth: '15em',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
  },
});

export default withStyles(styles)(NotFound);
