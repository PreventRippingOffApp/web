import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(3, 0, 0),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              ぼったくりガードWEB
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <TextField id="outlined-search" label="検索" type="search" variant="outlined" fullWidth />
          </Container>
        </div>
      </header>
  );
}