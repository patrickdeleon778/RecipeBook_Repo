export const fetchRecipes = () => {
  return fetch(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=067e3bfbdd774bd4823a992bf1d1a820"
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.error(error));
};
