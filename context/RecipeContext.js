import React, { createContext, useState } from 'react';
import axios from 'axios';  // Asegúrate de importar axios

// Create a context with a default empty state
export const RecipeContext = createContext({
  savedRecipes: [],
  setSavedRecipes: () => {},
  favorites: [],
  addFavorite: () => {},
  getFavorites: () => {},
  isSaved: false,
  setIsSaved: () => {},
  isLoading: false,
  setIsLoading: () => {},
  removeFavorite: () => {}
});

export const RecipeProvider = ({ children }) => {
  // State for saved recipes
  const [savedRecipes, setSavedRecipes] = useState([]);
  // State to check if a particular recipe is saved
  const [isSaved, setIsSaved] = useState(false);
  // State to manage loading
  const [isLoading, setIsLoading] = useState(false);
  // State for favorite recipes
  const [favorites, setFavorites] = useState([]);


  const addFavorite = async (userId, recipeId) => {
    console.log(userId); // Imprime el userId
  console.log(recipeId); // Imprime el recipeId

    if (!userId) {
      console.error("User ID is undefined.");
      return;
    }
    try {
      const response = await axios.put(`https://recipeappbackend.azurewebsites.net/user/add-favorite/${userId}`, { recipeId });
      // If it's successful, consider updating the favorites state
      console.log(response.data.message);
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };
  
  const removeFavorite = async (userId, recipeId) => {
    if (!userId) {
      console.error("User ID is undefined.");
      return;
    }
    try {
      const response = await axios.delete(`https://recipeappbackend.azurewebsites.net/user/remove-favorite/${userId}`, { data: { recipeId } });
      // If it's successful, consider updating the favorites state
      console.log(response.data.message);
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const getFavorites = async (userId) => {
    if (!userId) {
      console.error("User ID is undefined.");
      return;
    }
    try {
      const response = await axios.get(`https://recipeappbackend.azurewebsites.net/user/favorites/${userId}`);
      setFavorites(response.data);  // Update the favorites in the context
      console.log("Favorites fetched successfully:", response.data);
    } catch (error) {
      console.error('Error getting favorites:', error);
    }
  };

  // The value prop of the provider will be our context's value
  const value = {
    savedRecipes,
    setSavedRecipes,
    favorites,
    addFavorite,
    removeFavorite, // Make sure to provide removeFavorite here
    getFavorites,
    isSaved,
    setIsSaved,
    isLoading,
    setIsLoading,
  };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

export default RecipeContext;