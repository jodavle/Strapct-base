import React from 'react';
import './styles/css/App.css';
import brandLogo from './assets/logomj.svg';
import TopNav from './components/TopNav';
import FooterBegin from './components/FooterBegin';
import MainContent from './components/MainContent';

function App() {
  return (
    <>
      <TopNav logo={brandLogo}/>
      <brandLogo />
      <MainContent title="Funciona intento 1?" body="Wow hola mundo" date="10-05-2020" />
      <FooterBegin />
    </>
  );
}

export default App;
