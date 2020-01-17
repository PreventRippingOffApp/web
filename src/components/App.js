import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import BottakuriVoiceCard from './BottakuriVoiceCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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

export default function App() {
  const classes = useStyles();
  const [values, setValues] = useState([]);

  useEffect(() => {
    // APIを叩く場合はここでやる
    setTimeout(() => setValues([1, 2, 3, 4, 5, 6, 7, 8, 9]), 3000);
  }, [values])

  return (
    <React.Fragment>
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {values.length !== 0 ?values.map(value => (
              <BottakuriVoiceCard {...{card: value}} key={value}/>
            )): <div />}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
