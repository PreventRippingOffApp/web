import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottakuriVoiceCard from './BottakuriVoiceCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
      <Grid container spacing={4}>
        {props.voices.length !== 0 ?props.voices.map(voice => (
          <BottakuriVoiceCard {...{card: voice}} key={voice}/>
        )): <div />}
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  const voices = state.voices.voiceData
  console.log(voices)
  return { voices };
};
export default connect(mapStateToProps, {getData})(BottakuriVoiceCardList);
