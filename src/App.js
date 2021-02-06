import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
const App = () => {
  const APP_ID = "d20f79e7";
  const APP_KEY = "90036dbbc385a0cae11ddd3159184fa4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <h1 className="app-title">Recipe Finder</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            dietLabels = {recipe.recipe.dietLabels}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
