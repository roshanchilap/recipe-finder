import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, dietLabels }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <p>
        <b>Calories:</b>
        {calories}
      </p>
      <p>{dietLabels}</p>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
