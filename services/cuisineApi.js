import axios from 'axios';

export const fetchCuisine = async (cuisine) => {
  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: '067e3bfbdd774bd4823a992bf1d1a820',
        cuisine: cuisine, // Add the cuisine parameter
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};