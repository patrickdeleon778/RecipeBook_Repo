import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import axios from 'axios';
import customColors from "../config/customColors";
import AnonReg from "../components/customFonts/AnonReg";
import { FontAwesome5 } from "@expo/vector-icons";
import AnonBold from "../components/customFonts/AnonBold";
import RecipeContext from "../context/RecipeContext";
import { useUser } from '../context/UserContext';

const FavoriteRecipes = ({ navigation }) => {
  const { user } = useUser(); // Get the current user
  const { getFavorites } = useContext(RecipeContext); // Get the getFavorites function from context
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (user && user._id) {
      getFavorites(user._id); // Fetch favorites using the user's ID
    }
  }, [user]); 


  const filteredRecipes = favoriteRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    const titles = favoriteRecipes.map(recipe => recipe.title);
    console.log(titles);
  };

  return (
    <FlatList
      contentContainerStyle={{ marginHorizontal: 20, paddingTop: 60 }}
      ListHeaderComponent={
        <>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search favorite recipe"
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
              <FontAwesome5 name="search" size={28} color={customColors.medium} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 40, marginLeft: 5 }}>
            <AnonBold style={{ fontSize: 20, fontWeight: "bold" }}>
              Favorite Recipes
            </AnonBold>
          </View>
        </>
      }
      data={filteredRecipes}
      numColumns={2}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Recipe", { recipe: item })}>
            <Image source={{ uri: item.image }} style={{ width: "100%", height: 200, borderRadius: 40 }} />
          </TouchableOpacity>
          <AnonReg style={{ textAlign: "center", marginTop: 5 }}>
            {item.title}
          </AnonReg>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: customColors.light,
    borderRadius: 40,
    marginTop: 30,
    padding: 5
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingRight: 10,
    fontFamily: "Anon"
  },
  button: {
    backgroundColor: customColors.white,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  }
});

export default FavoriteRecipes;