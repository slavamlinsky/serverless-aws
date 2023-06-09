import React, { Component } from 'react';
import './App.css';
import './css/style.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />        
      </div>
    );
  }
}

export default App;
