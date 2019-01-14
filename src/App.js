import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import BurgerMenu from './components/BurgerMenu';
import SideBar from './components/SideBar';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BurgerMenu />
        <SideBar />
        <Home />
      </div>
    );
  }
}


export default App
