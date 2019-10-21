import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";
import TourList from './components/Tourlist';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <TourList />
    </React.Fragment>
  );
}

export default App;
