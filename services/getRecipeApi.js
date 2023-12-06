import axios from 'axios';

export const fetchRecipes = async () => {
  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: '067e3bfbdd774bd4823a992bf1d1a820',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};