import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

export default function BottakuriVoiceCard(data) {
  const classes = useStyles();
  data = data.card
  console.log(data)
  const src = "https://maps.google.co.jp/maps?output=embed&z=16&q=" + data.position.latitude + "," + data.position.longitude
  console.log(src)
  return (
    <Grid item key={data.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <iframe src={src}></iframe>
        <CardContent className={classes.cardContent}>
          <GridList cellHeight={100} cols={6}>
            <GridListTile cols={2} style={{textAlign: "center"}}>
              <Player audioURL={data.url} />
            </GridListTile>
            <GridListTile cols={4}>
              <Typography>
                {data.date}
              </Typography>
              <Typography variant="h5" component="h2" style={{textAlign: "left"}}>
                位置情報 {data.id+1}
              </Typography>
              <Typography  style={{textAlign: "initial"}}>
                {data.position.name}
              </Typography>
            </GridListTile>
          </GridList>
        </CardContent>
      </Card>
    </Grid>
  );
}
