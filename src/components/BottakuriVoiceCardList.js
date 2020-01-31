import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottakuriVoiceCard from './BottakuriVoiceCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { getData } from "../redux/actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  grid: {
    marginTop: '1%'
  }
}));

function BottakuriVoiceCardList(props) {
  const classes = useStyles();

  useEffect(() => {
    // APIを叩く場合はここでやる
    setTimeout(() => props.getData(), 1000);
  }, [ props])

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4} className={classes.grid}>
        {props.voices.length !== 0 ?props.voices.map(voice => (
          <BottakuriVoiceCard {...{card: voice}} key={voice.id}/>
        )): <div />}
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  const voices = state.voices.voiceData
  return { voices };
};
export default connect(mapStateToProps, {getData})(BottakuriVoiceCardList);
