import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imglinkform/imglinkform';
import Rank from './components/rank/rank';
import ParticlesBg from 'particles-bg'
import './App.css';


function App() {
  return (
    <div className="App">
      <ParticlesBg className='particles' type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm/>
      {/* {
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
