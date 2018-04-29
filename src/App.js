import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ImageSection from './Components/ImageSection/ImageSection';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/* <main className="container"> */}
          <Navbar />
          <Header />
            <div className={'row'}>
              <ImageSection />
            </div>
        {/* </main> */}
      </div>
    );
  }
}

export default App;
