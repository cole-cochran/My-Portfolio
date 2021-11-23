import React from 'react';
import './assets/css/style.css'
function Body() {
    return (
  <body>
    <header class="header">
        <h1>Cole Cochran</h1>
        <nav class="navbar">
            <ul>
                <a href="#about-me">About</a>
                <a href="#work">Work</a>
                <a href="#contact-me">Contact Me</a>
                <a href="https://drive.google.com/file/d/146tspX44vi961bY4gLJK_JHb0BcaLX1h/view?usp=sharing">Resume</a>
            </ul>
        </nav>
    </header>
    <figure title="geometric" class="headerphoto"></figure>
    
    <main>
        <section id="about-me" class="about-me">
            <h2>About Me</h2>
            <article class="article">
                <p>
                Cole Cochran is a Software Engineer with experience in DevOps & Site Reliability.
                Currently studying Full Stack Development. When not working on understanding different programming languages, he spends time mountain biking and entertaining his Australian Shepherd. 
                </p>
                <img src="assets/images/IMG_0035.JPG"></img>
            </article>
        </section>
        <container class="projects">
        <div class="work">
            <figure class="project1">
                <a href="https://cole-cochran.github.io/crypto-cosmos/" target="_blank">Project 1</a>
            </figure>
            
        </div>
        
        <div class="work">
            <figure class="project2">
                <a href="https://pipe-dreams.herokuapp.com/" target="_blank">Project 2</a>
            </figure>
        </div>
                    
        <div class="work">
            <figure class="box">
            <h2 class="box-header">Project Coming Soon</h2>
            <div class="body"></div>
            <p></p>
            </figure>
        </div>
        
        <div class="work">
            <figure class="box">
            <h2 class="box-header">Project Coming Soon</h2>
            <div class="body"></div>
            <p></p>
            </figure>  
        </div> 
        </container>
        <section id="contact-me" class="contact-me">
            <h2>Contact Me</h2>
            <div class= "links">
                <a href="mailto:colecochran405@gmail.com">Email</a>
                <a href="https://github.com/cole-cochran">Github</a>
                <a href="https://www.linkedin.com/in/cole-cochran-49983911a/">LinkedIn</a>
            </div>
        </section>
    </main>
    <footer class="footer">
        <h2>Designed by Cole Cochran</h2>
    </footer>
</body>
)
}

export default Body;