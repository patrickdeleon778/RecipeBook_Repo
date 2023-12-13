import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RecipeListScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [isGuest, setIsGuest] = useState(false);
  const cuisineTypes = ['Italian', 'Chinese', 'Indian', 'French', 'Mexican', 'Japanese'];
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    checkIfGuest();
    fetchRecipes(); // Fetch a general list at the start
  }, [selectedCuisines]);

  const checkIfGuest = async () => {
    const token = await AsyncStorage.getItem('token');
    setIsGuest(!token);
  };


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

  ///handle save
  const handleSaveRecipe = async (recipe) => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      console.log('User not logged in');
      return;
    }
  
    try {
      const isRecipeSaved = savedRecipes.includes(recipe.id);
      const method = isRecipeSaved ? 'DELETE' : 'POST';
      const url = `http://192.168.0.18:5000/recipes/save/${recipe.id}`;
  
      await axios({
        method: method,
        url: url,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Update local saved recipes state
      if (isRecipeSaved) {
        setSavedRecipes(savedRecipes.filter(id => id !== recipe.id));
      } else {
        setSavedRecipes([...savedRecipes, recipe.id]);
      }
    } catch (error) {
      console.error('Error saving recipe: ', error);
    }
  };
    ///handle save

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
    <View style={styles.recipeItem}>
      <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>Preparation time: {item.readyInMinutes} minutes</Text>
          {item.extendedIngredients && item.extendedIngredients.length > 0 ? (
            <Text>{item.extendedIngredients.map(ingredient => ingredient.name).join(', ')}</Text>
          ) : (
            <Text>No ingredients listed.</Text>
          )}
        </View>
      </TouchableOpacity>
      {!isGuest && (
        <Button title="Save Recipe" onPress={() => handleSaveRecipe(item)} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {cuisineTypes.map((cuisine) => (
          <Button
            key={cuisine}
            title={cuisine}
            onPress={() => handleCuisinePress(cuisine)}
            color={selectedCuisines.includes(cuisine) ? 'blue' : 'gray'}
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