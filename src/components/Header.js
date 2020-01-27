import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { handleSearchFormOpen } from "../redux/actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  header: {
    position: 'fixed',
    width: '100%',
    zIndex: 100
  },
  grow: {
    flexGrow: 1,
  },
  searchButton: {
    flex: 1,
    textAlign: 'right'
  },
  title: {
    display: 'block',
  },
  noTitle: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
  },
  noDisplay: {
    display: 'none'
  }
}));

function Header(props) {
  const classes = useStyles();
  console.log(props)
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Typography className={props.searchFormOpen ? classes.noTitle : classes.title} variant="h6" noWrap>
          ぼったくりガードWEB
        </Typography>
        <div className={props.searchFormOpen ? classes.noDisplay : classes.searchButton}>
          <IconButton
            onClick={() => props.handleSearchFormOpen(props.searchFormOpen)}
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className={props.searchFormOpen ? classes.search : classes.noDisplay}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
            style={{width: "100%"}}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = state => {
  const searchFormOpen = state.visibility.searchForm
  return { searchFormOpen };
};

export default connect(mapStateToProps, {handleSearchFormOpen})(Header);
