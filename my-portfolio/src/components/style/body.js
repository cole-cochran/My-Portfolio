// import React from 'react';
// import '../../assets/css/style.css'
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Body() {
//     return (
//   <body>
//     <header class="header">
//         <h1>Cole Cochran</h1>
//         <nav class="navbar">
//             <ul>
//                 <a href="#about-me">About</a>
//                 <a href="#work">Work</a>
//                 <a href="#contact-me">Contact Me</a>
//                 <a href="https://drive.google.com/file/d/146tspX44vi961bY4gLJK_JHb0BcaLX1h/view?usp=sharing">Resume</a>
//             </ul>
//         </nav>
//     </header>
//     <figure title="geometric" class="headerphoto"></figure>
    
//     <main>
//         <section id="about-me" class="about-me">
//             <h2>About Me</h2>
//             <article class="article">
//                 <p>
//                 Cole Cochran is a Software Engineer with experience in DevOps & Site Reliability.
//                 Currently studying Full Stack Development. When not working on understanding different programming languages, he spends time mountain biking and entertaining his Australian Shepherd. 
//                 </p>
//                 <img src="assets/images/IMG_0035.JPG"></img>
//             </article>
//         </section>
//         <container class="projects">
//         <div class="work">
//             <figure class="project1">
//                 <a href="https://cole-cochran.github.io/crypto-cosmos/" target="_blank">Project 1</a>
//             </figure>
            
//         </div>
        
//         <div class="work">
//             <figure class="project2">
//                 <a href="https://pipe-dreams.herokuapp.com/" target="_blank">Project 2</a>
//             </figure>
//         </div>
                    
//         <div class="work">
//             <figure class="box">
//             <h2 class="box-header">Project Coming Soon</h2>
//             <div class="body"></div>
//             <p></p>
//             </figure>
//         </div>
        
//         <div class="work">
//             <figure class="box">
//             <h2 class="box-header">Project Coming Soon</h2>
//             <div class="body"></div>
//             <p></p>
//             </figure>  
//         </div> 
//         </container>
//         <section id="contact-me" class="contact-me">
//             <h2>Contact Me</h2>
//             <div class= "links">
//                 <a href="mailto:colecochran405@gmail.com">Email</a>
//                 <a href="https://github.com/cole-cochran">Github</a>
//                 <a href="https://www.linkedin.com/in/cole-cochran-49983911a/">LinkedIn</a>
//             </div>
//         </section>

// import  React from 'react';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';



// export default function Cards() {
 
//     const theme = createTheme();
//     return (
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <main>



//           <Container sx={{ py: 8 }} maxWidth="lg">
//             {/* {/* End hero unit
//             <Grid container spacing={4}>
//             <Grid item  xs={12} sm={6} md={4}>
//             <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <CardMedia
//         component="img"
//         //height="140"
//         sx={{
//             16:9
//             // pt: '56.25%',
//           }}
//           image="./images/imgs/plannerpic.avif"        alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Event-Planner
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Link To Github</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//     </Grid>
//     <Grid item  xs={12} sm={6} md={4}>

//     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="./images/imgs/projectOne.avif"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Project-One
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//     </Grid>
//     <Grid item  xs={12} sm={6} md={4}>

//     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="./images/imgs/weatherpic.avif"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Weather Dashboard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//     </Grid>
//     <Grid item  xs={12} sm={6} md={4}>

//     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="./images/imgs/h2.avif"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Feed Your Lifestyle
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
  

// </Grid>

// <Grid item  xs={12} sm={6} md={4}>

//     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="#"
//         alt="Coming Soon"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Feed Your Lifestyle
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
  

// </Grid>
// <Grid item  xs={12} sm={6} md={4}>

//     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="./images/imgs/h1.avif"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Budgeting App
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
  

// </Grid>
// </Grid>
// </Container>


// </main>
//       </ThemeProvider>
//     );
//   }
// </body>
// )
// }

// export default Body; */}