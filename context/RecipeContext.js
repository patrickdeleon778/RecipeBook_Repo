import React, { createContext, useState } from 'react';

// Create a context with a default empty state
const RecipeContext = createContext({
  savedRecipes: [],
  setSavedRecipes: () => {},
  isSaved: false,
  setIsSaved: () => {},
  isLoading: false,
  setIsLoading: () => {}
});

export const RecipeProvider = ({ children }) => {
  // State for saved recipes
  const [savedRecipes, setSavedRecipes] = useState([]);
  // State to check if a particular recipe is saved
  const [isSaved, setIsSaved] = useState(false);
  // State to manage loading
  const [isLoading, setIsLoading] = useState(false);

  // The value prop of the provider will be our context's value
  // It includes everything that we want to provide to the consuming components
  const value = {
    savedRecipes,
    setSavedRecipes,
    isSaved,
    setIsSaved,
    isLoading,
    setIsLoading,
  };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

export default RecipeContext;