import React from 'react';
import Body from './components/style/HeaderImage';
import About from './components/style/About';
import Work from './components/style/Work'
import Contact from './components/style/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Header from './components/style/Header';
import Footer from './components/style/Footer'

function App() {
  return (
    <div className="my-portfolio">
    <Header />
    <Body />
    <About />
    <Work />
    <Contact />
    <Footer />
    
    </div>

  );
}

export default App;