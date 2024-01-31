import NasaApodComponent from './components/NasaApodComponent/NasaApodComponent';
import UFO from './components/UFO/UFO';
import MarsRover from './components/MarsRover/MarsRover';
import Epic from './components/Epic/Epic';

import DateSearchForm from './components/DateSearchForm/MarsRover/DateSearchForm';
import MarsRoverGallery from './components/MarsRoverGallery/MarsRoverGallery';

import ShootingStarNavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ShootingStarNavBar /> 
      
      <UFO />
      

      
      </header>
    </div>
  );
}

export default App;
