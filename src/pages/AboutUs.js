import { React } from "react";
import ReactPlayer from "react-player";
import { Typography, makeStyles, Card, CardContent, CardMedia, Grid, Container, CardActionArea, Paper } from "@material-ui/core";
import './AboutUs.css';
import { COLORS } from "../styles/color.styles";
import tree from "../assets/image/trees1.jpg";
import environment from "../assets/image/clean-environment.jpg";
import community from "../assets/image/community.jpg";

const AboutUs = () => {
const classes = useStyles();
  return (
    <div className="App">
      <div className="cover">
          <div className="content">
            <Grid 
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            > 
              <Grid item>
                <Container component="main" maxWidth="xl">
                  <Typography className={classes.typo1}>WE LOVE NATURE</Typography>
                </Container>
              </Grid>
            </Grid>
          </div>
      </div>  

      <div className="who">
        <Container className={classes.who} component="main" maxWidth="xl" disableGutters>
          <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography className={classes.typo2}>Who We Are</Typography>
            <Container maxWidth="md">
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>
                  <div className="text">
                    <Typography className={classes.typo3} component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie at elementum eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim. 
                      Ultrices vitae auctor eu augue ut lectus arcu bibendum. Quisque id diam vel quam elementum pulvinar etiam. Magna fermentum iaculis eu non diam phasellus vestibulum. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. 
                      Sit amet facilisis magna etiam tempor orci. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Dolor purus non enim praesent elementum facilisis leo. Leo urna molestie 
                      at elementum eu facilisis sed. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mi tempus imperdiet nulla malesuada pellentesque. Eget nunc scelerisque viverra mauris in 
                      aliquam sem fringilla ut. A diam sollicitudin tempor id eu nisl nunc mi. Quam quisque id diam vel quam elementum pulvinar etiam. Amet purus gravida quis blandit turpis. Tincidunt eget nullam non nisi.
                    </Typography>
                  </div>
                  <div className="plain_text">
                    <Paper className={classes.paper} elevation={0}>
                      <Typography className={classes.typo6}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A PLACE WHERE <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WE CAN REST</Typography>
                    </Paper>
                  </div>  
                  <div className='player-wrapper'>
                    <ReactPlayer
                      className='react-player'
                      url='https://www.youtube.com/watch?v=nqye02H_H6I'
                      width='100%'
                      height='100%'
                      controls
                      muted
                    />
                  </div>
                </Grid>
                <Grid item>
                  
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Container>
      </div>
      
      <div className="what">
        <Container component="main" maxWidth="xl" className={classes.what} disableGutters>
          <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography className={classes.typo5}>What we want</Typography>
            <Container maxWidth="lg">
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>
                  <CardActionArea>
                    <Card className={classes.cardPic}>
                    <CardContent className={classes.content}>
                      <Typography className={classes.typo4}>A Healthy Planet</Typography>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt="Planet"
                      image={tree}
                      title="Healthy Planet"
                    />  
                    </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
                <Grid item>
                  <CardActionArea>
                    <Card className={classes.cardPic}>
                    <CardContent className={classes.content}>
                      <Typography className={classes.typo4}>A Clean Environment</Typography>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt="Environment"
                      image={environment}
                      title="Clean Environment"
                    />  
                    </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
                <Grid item>
                  <CardActionArea>
                    <Card className={classes.cardPic}>
                    <CardContent className={classes.content}>
                      <Typography className={classes.typo4}>A Safe Community</Typography>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt="Community"
                      image={community}
                      title="Safe Community"
                    />  
                    </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              </Grid>  
            </Container>
          </Grid>
        </Container>
      </div>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({

  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 'auto',
    marginTop: '30px',
    marginBottom: '30px',
    background: COLORS.GREEN_GRADIENT
  },

  typo1: {
    flexGrow: 1,
    fontSize: 100,
    fontWeight: 'bold',
    fontFamily: 'Pathway Gothic One',
    color: COLORS.WHITE,
    paddingRight: '80px'
  },

  typo2: {
    flexGrow: 1,
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Pathway Gothic One',
    color: COLORS.BLACK1,
    marginTop: '10px',
  },

  typo3: {
    flexGrow: 1,
    fontSize: 20,
    fontFamily: 'Pathway Gothic One',
    margin: theme.spacing(5)
  },

  typo4: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },

  typo5: {
    flexGrow: 1,
    fontSize: 50,
    fontWeight: 'bold',
    color: COLORS.BLACK1,
    fontFamily: 'Pathway Gothic One',
    marginTop: '20px',
    marginBottom: '20px',
  },

  typo6: {
    flexGrow: 1,
    fontSize: 100,
    fontWeight: 'bold',
    color: COLORS.BLACK1,
    fontFamily: 'Pathway Gothic One',
    paddingRight: '80px'
  },

  cardPic: {
    width: 400,
    maxHeight: 500
  },

  cardVid: {
    width: 450,
    color: COLORS.WHITE,
    backgroundColor: COLORS.GRAY,
  },

  media: {
    height: 200,
  },

  video: {
    marginTop:"10px",
    height: 500,
  },

  who: {
    maxWidth: "auto",
  },

  what: {
    maxWidth: "auto",
    paddingBottom: "60px",
    background: COLORS.GREEN_GRADIENT1,
  },
  
}));

export default AboutUs;
