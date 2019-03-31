import React, { Component } from 'react';
import RecipeList from './RecipeList/RecipeList';
import Navbar from './Navbar/Navbar';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />

      </div>
    );
  }
}

export default RecipeApp;
