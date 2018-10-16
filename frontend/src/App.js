import React, { Component } from 'react';
import './App.css';
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';


class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Content>{this.props.children}</Content>
        <Footer/>
      </div>
    );
  }
}

export default App;
