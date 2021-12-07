import React from 'react';
import Body from './components/style/HeaderImage';
import Work from './components/style/Work'
import Contact from './components/style/Contact'
import Footer from './components/style/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Header from './components/style/Header';


function App() {
  return (
    <div className="my-portfolio">
    <Header />
    <Body />
    <Work />
    <Contact />
    </div>

  );
}

export default App;