import React from 'react';
import Body from './components/style/HeaderImage';
import Work from './components/style/Work'
import NavBar from './components/style/Navbar';
import Footer from './components/style/Footer'

// import { ClassNames } from '@emotion/react';
import '../src/App.css'
import Header from './components/style/Header';

function App() {
  return (
    <div className="my-portfolio">
    <Header />
    <Body />
    <Work />
    <Footer />
    </div>

  );
}

export default App;