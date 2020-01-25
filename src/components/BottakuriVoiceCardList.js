import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Header from './Header';
import BottakuriVoiceCard from './BottakuriVoiceCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { getData } from "../redux/actions";

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(3, 0, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "-webkit-right"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function BottakuriVoiceCardList(props) {
  const classes = useStyles();

  useEffect(() => {
    // APIを叩く場合はここでやる
    setTimeout(() => props.getData(), 3000);
  }, [])

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Button />
      <Grid container spacing={4}>
        {props.voices.voices.voiceData.length !== 0 ?props.voices.voices.voiceData.map(voice => (
          <BottakuriVoiceCard {...{card: voice}} key={voice}/>
        )): <div />}
      </Grid>
    </Container>
  );
}

const mapStateToProps = voices => {
  return { voices };
};
export default connect(mapStateToProps, {getData})(BottakuriVoiceCardList);
