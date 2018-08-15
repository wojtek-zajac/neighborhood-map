import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import Header from './Components/Header'
import Search from './Components/Search'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/>

        <main className="main">
          <Map/>

          <Search/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
