import React, { Component } from 'react';
import Recipe from './Recipe/Recipe';
import Navbar from './Navbar/Navbar';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Recipe 
        title="Spaghetti"
        ingredients={['flour', 'water']}
        instructions="Mix ingredients"
        img="spaghetti.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
