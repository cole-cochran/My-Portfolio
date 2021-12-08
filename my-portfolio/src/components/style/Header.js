import React from 'react';
import { Navbar, Container, Nav} from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';



function Header() {
  return(
  <Navbar collapseOnSelect expand="lg" className="navbar" >
  <Container>
  <Navbar href="#home">Cole Cochran</Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" className= "nav-logo">
      <GitHubIcon aria-label="github" onClick={() => window.open("https://github.com/cole-cochran")}/>
      <LinkedInIcon aria-label="linkedin" onClick={() => window.open("https://www.linkedin.com/in/cole-cochran-49983911a/")}/>
      <TextSnippetIcon aria-label="resume" onClick={() => window.open("https://drive.google.com/file/d/146tspX44vi961bY4gLJK_JHb0BcaLX1h/view?usp=sharing")}/>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header;