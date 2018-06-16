import React from 'react';
import { InsertChart, ViewList, AddBox } from '@material-ui/icons';
import {
  Drawer,
  Typography,
  Toolbar,
  AppBar,
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Card,
  CardContent,
  Button,
} from '@material-ui/core';

const Question = () => {
  return (
    <Card
      style={{
        maxWidth: '45em',
        minWidth: '30em',
        alignSelf: 'stretch',
      }}
    >
      <CardContent className="cardContent" style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '1.5em',
          }}
        >
          <Avatar
            src="https://randomuser.me/api/portraits/men/29.jpg"
            style={{
              height: 75,
              width: 75,
            }}
          />
          <Typography>@mamodom</Typography>
          <Typography>{new Date().toDateString()}</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          <Typography style={{ alignSelf: 'center' }} variant="title">
            Would you rather?
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button style={{ margin: '0.4em' }} variant="outlined">
              Be telepathic?
            </Button>
            <Button style={{ margin: '0.4em' }} variant="outlined">
              Be telekinetic?
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const AnsweredQuestion = () => {
  return (
    <Card
      style={{
        maxWidth: '45em',
        minWidth: '30em',
        alignSelf: 'stretch',
      }}
    >
      <CardContent className="cardContent" style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '1.5em',
          }}
        >
          <Avatar
            src="https://randomuser.me/api/portraits/men/29.jpg"
            style={{
              height: 75,
              width: 75,
            }}
          />
          <Typography>@mamodom</Typography>
          <Typography>{new Date().toDateString()}</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          <Typography style={{ alignSelf: 'center' }} variant="title">
            Would you rather?
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button style={{ margin: '0.4em' }} variant="outlined">
              Be telepathic?
            </Button>
            <div
              style={{
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
              }}
            >
              Be telekinetic?
              <span
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.23)',
                  position: 'absolute',
                  width: '75%',
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: '3px',
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              >
                {''}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Foo = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Would You Rather?
          </Typography>
        </Toolbar>
        <Avatar
          src="https://randomuser.me/api/portraits/women/39.jpg"
          className={classes.avatar}
        />
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <ViewList />
            </ListItemIcon>
            <ListItemText primary="Questions" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddBox />
            </ListItemIcon>
            <ListItemText primary="Create a Question" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InsertChart />
            </ListItemIcon>
            <ListItemText primary="Leaderboard" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content} style={{ alignItems: 'center' }}>
        <div className={classes.toolbar} />
        <div style={{ paddingBottom: 'inherit' }}>
          <Button variant="raised" color="primary">
            Unanswered
          </Button>
          <Button variant="raised">Answered</Button>
        </div>
        <Question />
        <AnsweredQuestion />
        <Question />
      </main>
    </div>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,

    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    alignSelf: 'center',
    marginRight: '1em',
  },
  drawerPaper: {
    position: 'relative',
    width: 250,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: theme.mixins.toolbar,
});

export default withStyles(styles)(Foo);
