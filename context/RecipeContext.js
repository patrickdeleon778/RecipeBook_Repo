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
  const [error, setError] = useState(null);

  const addFavorite = async (userId, recipeId) => {
    // No need to print userId and recipeId here since they are being printed in handleSave
    if (!userId) {
      console.error("User ID is undefined.");
      return;
    }
    try {
      const response = await axios.post(`https://recipeappbackend.azurewebsites.net/user/add-favorite/${userId}`, { recipeId: recipeId });
      console.log(response.data.message);
      setFavorites(prevFavorites => [...prevFavorites, recipeId]); // Update favorites
    } catch (error) {
      console.error('Error adding favorite:', error);
      setError(error); // Set error state  
    }
  };
  
  const removeFavorite = async (userId, recipeId) => {
    if (!userId) {
      console.error("User ID is undefined.");
      return;
    }
    try {
      const response = await axios.delete(`https://recipeappbackend.azurewebsites.net/user/remove-favorite/${userId}`, { data: { recipeId } });
      console.log(response.data.message);
      setFavorites(prevFavorites => prevFavorites.filter(id => id !== recipeId)); // Update favorites
    } catch (error) {
      console.error('Error removing favorite:', error);
      setError(error); // Set error state
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
    error,
    setIsSaved,
    isLoading,
    setIsLoading,
    
  };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

export default RecipeContext;