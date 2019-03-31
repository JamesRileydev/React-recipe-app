import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
  render() {
   const { title, img, instructions } = this.props;
   const ingredients = this.props.ingredients.map((i,index) => (
     <li key={index}>{i}</li>
   ));
    return (
      <div className="recipe-card">
        <img src={img} alt={title}/>
          <div className={"recipe-card-content"}>
            <h3>{title}</h3>
            <h4>Ingredients:</h4>
            <ul>{ingredients}</ul>
            <h4>Instructions</h4>
            <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;