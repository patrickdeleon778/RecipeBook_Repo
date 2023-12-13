import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedRecipeListScreen = ({ navigation }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSavedRecipes();
  }, []);

  const fetchSavedRecipes = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const response = await axios.get('http://your-backend-url/recipes/saved', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setSavedRecipes(response.data);
      } else {
        console.log('User not logged in');
        // Handle guest user scenario or navigate to login
      }
    } catch (error) {
      console.error('Error fetching saved recipes: ', error);
    } finally {
      setLoading(false);
    }
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
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={savedRecipes}
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
  // ...add any additional styles you need
});

export default SavedRecipeListScreen;