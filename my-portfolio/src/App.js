import React from 'react';
import Body from './components/style/Body';
import Work from './components/pages/Work'
import NavBar from './components/style/Navbar';
import Footer from './components/style/Footer'
// import { ClassNames } from '@emotion/react';
import '../src/index.css'
import Header from './components/style/Header';

function App() {
  return (
    <div className="my-portfolio">
    <Header />; 
    <Body />;
    <Work />;
    <Footer />;
    </div>

  );
}

export default App;