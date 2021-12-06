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
        <Button size="medium">Repository</Button>
        <Button size="medium">Deployment</Button>
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
      <CardActions>
        <Button size="medium">Repository</Button>
        <Button size="medium">Deployment</Button>
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
        <Button size="medium">Repository</Button>
        <Button size="medium">Deployment</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs={12} sm={6} md={4}>

    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="Image of a web application"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Repository</Button>
        <Button size="medium">Deployment</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item  xs={12} sm={6} md={4}>

    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="./images/imgs/h2.avif"
        alt="Image of a web application"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Send it!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Repository</Button>
        <Button size="medium">Deployment</Button>
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
          Send it!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Repository</Button>
        <Button size="medium">Deployment</Button>
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
