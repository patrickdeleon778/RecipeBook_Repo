import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
// import { TouchableOpacity } from 'react-native';

const RecipeListScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const cuisineTypes = ['Italian', 'Chinese', 'Indian', 'French', 'Mexican', 'Japanese'];

  useEffect(() => {
    fetchRecipes(); // Fetch a general list at the start
  }, [selectedCuisines]);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          apiKey: '95c1a34fcd6a4c76a6b4b516a9d5a832',
          number: 10,
          cuisine: selectedCuisines.join(','), // Join the selected cuisines into a string
          addRecipeInformation: true,
        }
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

 // const handleCuisinePress = (cuisineType) => {
 //   fetchRecipes(cuisineType);
 // };
  const handleCuisinePress = (cuisineType) => {
    setSelectedCuisines((prevSelectedCuisines) => {
      if (prevSelectedCuisines.includes(cuisineType)) {
        // If already selected, remove it from the array
        return prevSelectedCuisines.filter(cuisine => cuisine !== cuisineType);
      } else {
        // If not selected, add it to the array
        return [...prevSelectedCuisines, cuisineType];
      }
    });
  };
  const renderRecipe = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
      <View style={styles.recipeItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>Preparation time: {item.readyInMinutes} minutes</Text>
        <Text>Ingredients: {item.extendedIngredients?.map(ingredient => ingredient.name).join(', ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      {cuisineTypes.map((cuisine) => (
  <Button
    key={cuisine}
    title={cuisine}
    onPress={() => handleCuisinePress(cuisine)}
    color={selectedCuisines.includes(cuisine) ? 'blue' : 'gray'} // Change color based on selection
  />
))}
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderRecipe}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  recipeItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecipeListScreen;