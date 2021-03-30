import React, { Component } from 'react';

import Search from './components/search/Search';

import NavBar from './components/navbar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

function App() {
  return (
    //We render the navigation bar and the search bar file
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
    
  );
}

export default App;
//Project By Aniket Singh. 