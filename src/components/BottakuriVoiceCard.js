import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Player from './Player';

const useStyles = makeStyles(theme => ({
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
}));

const audioURL = "http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3"

export default function BottakuriVoiceCard(data) {
  const classes = useStyles();

  return (
    <Grid item key={data.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <GridList cellHeight={100} cols={6}>
            <GridListTile cols={2} style={{textAlign: "center"}}>
              <Player audioURL={audioURL} />
            </GridListTile>
            <GridListTile cols={4}>
              <Typography>
                YYYY/MM/DD
              </Typography>
              <Typography variant="h5" component="h2" style={{textAlign: "left"}}>
                位置情報 {data.id}
              </Typography>
              <Typography  style={{textAlign: "initial"}}>
                位置情報位置情報位置情報位置情報位置情報位置情報
              </Typography>
            </GridListTile>
          </GridList>
        </CardContent>
      </Card>
    </Grid>
  );
}
