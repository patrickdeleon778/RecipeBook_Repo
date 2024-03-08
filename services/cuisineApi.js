import axios from 'axios';




export const fetchCuisine = async (cuisine, query) => {
  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: '067e3bfbdd774bd4823a992bf1d1a820',
        cuisine: cuisine,
        query: query,
      },
    });

    // console.log('API Response:', response.data.results);

    return response.data.results;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
    
  }
};


export const fetchRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
      params: {
        apiKey: '067e3bfbdd774bd4823a992bf1d1a820',
        includeNutrition: true,
      },
    });

    const recipeDetails = response.data;
    return recipeDetails;
  } catch (error) {
    console.error('Error fetching recipe details: ', error);
    throw error;
  }
};


//email 1 api key: 067e3bfbdd774bd4823a992bf1d1a820
//email 2 api key: d4b55fa8ba42409a97a2847865aef001
//email 3 api key: 12eff79c402c49fe89e486ceb64581b8
//mauricio api key: 95c1a34fcd6a4c76a6b4b516a9d5a832
//angelica api key: 1fc9dd56aa9c4608b3713c6e370a73f9