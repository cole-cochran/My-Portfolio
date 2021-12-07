import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Cards() {
 
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
            <Grid item  xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://github.com/cole-cochran/My-Portfolio/blob/main/my-portfolio/src/assets/images/cactus.png?raw=true"
        alt="Image of web application"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cactus
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Cactus is a sleek, secure, and transparent social media platform for web developers. Built by developers, for developers. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium"href="https://github.com/cole-cochran/Cactus-Social">Repository</Button>
        <Button size="medium">Deployment coming soon</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs={12} sm={6} md={4}>

    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://github.com/cole-cochran/My-Portfolio/blob/main/my-portfolio/src/assets/images/cryptocosmos.png?raw=true"
        alt="Image of a web application"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Crypto Cosmos
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Crypto Cosmos is your all in one site to compare the latest trends in crypto currency, and crypto news.
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="medium"href="https://github.com/cole-cochran/Crypto-Cosmos">Repository</Button>
        <Button size="medium"href="https://cole-cochran.github.io/Crypto-Cosmos/">Deployment</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs={12} sm={6} md={4}>

    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://github.com/cole-cochran/My-Portfolio/blob/main/my-portfolio/src/assets/images/pipedreams.png?raw=true"
        alt="Image of a web application"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pipe Dreams
        </Typography>
        <Typography variant="body2" color="text.secondary">
         In an unfamiliar place, and want to find the cheapest fuel, or closest charging station? Pipe Dreams is the quick, efficient way to post, and follow fuel prices to your location. Use the built in map feature to build out your route. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" href="https://github.com/cole-cochran/Pipe-Dreams">Repository</Button>
        <Button size="medium" href="https://pipe-dreams.herokuapp.com/">Deployment</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs={12} sm={6} md={4}>

    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://github.com/cole-cochran/My-Portfolio/blob/main/my-portfolio/src/assets/images/weather.png?raw=true"
        alt="Image of a web application"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Check your weather. 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Weather can change rapidly, no matter where you are. Planning a trip, or an outing in your city? Check out your weather here!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" href="https://github.com/cole-cochran/weather-dashboard">Repository</Button>
        <Button size="medium"href="https://cole-cochran.github.io/weather-dashboard/">Deployment</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs={12} sm={6} md={4}>

    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://github.com/cole-cochran/My-Portfolio/blob/main/my-portfolio/src/assets/images/techblog.png?raw=true"
        alt="Image of a web application"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cole's Tech Blog
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Checkout my daily tech blog, it follows the keep it simple stupid model. Feel free to create an account, and post your own thoughts. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" href="https://github.com/cole-cochran/My-Tech-Blog">Repository</Button>
        <Button size="medium" href="https://my-tech-blog-2021.herokuapp.com/">Deployment</Button>
      </CardActions>
    </Card>
  

</Grid>

<Grid item  xs={12} sm={6} md={4}>

    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="#"
        alt="Coming Soon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Your Fitness Tracker
        </Typography>
        <Typography variant="body2" color="text.secondary">
          With this web based fitness tracker, you can easily track your workouts with individual activities. It is quick and easy to sort between cardio, or weight training. Plus, create your own workout and log your progress!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" href="https://github.com/cole-cochran/Mongoose-Fitness-Tracker">Repository</Button>
        <Button size="medium" href="https://desolate-river-96368.herokuapp.com/?id=61a693a8e811be0016f00b1b">Deployment</Button>
      </CardActions>
    </Card>
  

</Grid>
<Grid item  xs={12} sm={6} md={4}>
</Grid>
</Grid>
</Container>
</main>
      </ThemeProvider>
    );
  }
