import axios from 'axios';

export const fetchCuisine = async (cuisine, query) => {
  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: '12eff79c402c49fe89e486ceb64581b8',
        cuisine: cuisine,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};



//email 2 api key: d4b55fa8ba42409a97a2847865aef001
//email 3 api key: 12eff79c402c49fe89e486ceb64581b8