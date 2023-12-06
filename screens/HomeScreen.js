import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import uuid from "react-native-uuid";

import { fetchRecipes } from "../services/getRecipeApi";
import { fetchCuisine } from "../services/cuisineApi";

import AnonReg from "../components/customFonts/AnonReg";
import AnonBold from "../components/customFonts/AnonBold";

import customColors from "../config/customColors";
import { FontAwesome5 } from "@expo/vector-icons";
import RecipeScreen from "./RecipeScreen";

const HomeScreen = ({ navigation }) => {
  const cuisineTypes = [
    {
      id: uuid.v4(),
      name: "Italian",
      image: require("../assets/images/flags/italian-flag.png"),
    },
    {
      id: uuid.v4(),
      name: "Chinese",
      image: require("../assets/images/flags/china-flag.png"),
    },
    {
      id: uuid.v4(),
      name: "Indian",
      image: require("../assets/images/flags/india-flag.png"),
    },
    {
      id: uuid.v4(),
      name: "French",
      image: require("../assets/images/flags/france-flag.png"),
    },
    {
      id: uuid.v4(),
      name: "Mexican",
      image: require("../assets/images/flags/mexico-flag.jpg"),
    },
    {
      id: uuid.v4(),
      name: "Japanese",
      image: require("../assets/images/flags/japan-flag.jpg"),
    },
  ];
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const [recipeData, setRecipeData] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = async () => {
    try {
      const recipes = await fetchCuisine(selectedCuisines, searchQuery);
      setRecipeData(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };


  const handleCuisinePress = async (cuisine) => {
    try {
      const recipes = await fetchCuisine(cuisine.name); // Assuming fetchRecipes is correctly implemented
      setSelectedCuisines(cuisine.name);
      setRecipeData(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchCuisine().then((recipes) => setSelectedCuisines(recipes));
  }, []);

  console.log(recipeData);

  return (
    <FlatList
      contentContainerStyle={{ marginHorizontal: 20, paddingTop: 60 }}
      ListHeaderComponent={
        <>
          <View>
            <Image
              source={require("../assets/images/PQ2_Teddie.webp")}
              style={{ height: 75, width: 75, borderRadius: 100 }}
            />
          </View>

          <View>
            <AnonReg style={{ fontSize: 20, marginTop: 20 }}>
              Hello, user!
            </AnonReg>
            <AnonBold
              style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}
            >
              A cool slogan goes here.
            </AnonBold>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#E2E8F0",
              backgroundColor: customColors.light,
              borderRadius: 40,
              marginTop: 30,
              padding: 5,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                marginLeft: 10,
                paddingRight: 10,
                fontFamily: "Anon",
              }}
              placeholder="Search for a recipe"
              onChangeText={text => setSearchQuery(text)}
              onSubmitEditing={handleSearch}
            />

            <TouchableOpacity
              style={{
                backgroundColor: customColors.white,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
              onPress={handleSearch}
            >
              <FontAwesome5
                name="pizza-slice"
                size={28}
                color={customColors.medium}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {cuisineTypes.map((cuisine) => (
              <TouchableOpacity
                key={cuisine.id}
                title={cuisine}
                onPress={() => handleCuisinePress(cuisine)}
                style={styles.button}
              >
                <Image
                  source={cuisine.image}
                  style={[
                    styles.image,
                    {
                      borderWidth: selectedCuisines === cuisine.name ? 4 : 0,
                      borderColor: customColors.primary,
                    },
                    selectedCuisines === cuisine.name && {
                      backgroundColor: customColors.primary,
                    },
                  ]}
                />
                <AnonReg style={styles.text}>{cuisine.name}</AnonReg>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ marginTop: 20, marginLeft: 5, fontWeight: "bold" }}>
            <AnonBold style={{ fontSize: 20 }}>Recipes</AnonBold>
          </View>
        </>
      }
      data={recipeData}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <>
          <View style={{ flex: 1, margin: 10 }}>
            <TouchableOpacity
              onPress={() => {
                console.log('Button pressed');
                navigation.navigate('Recipe', { recipe: item });
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: customColors.light,
                  borderRadius: 40,
                }}
              />
            </TouchableOpacity>
            <AnonReg style={{ textAlign: "center", marginTop: 5 }}>
              {item.title}
            </AnonReg>
          </View>
        </>
      )}
    />
  );
};


const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    margin: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: customColors.light,
  },
  text: {
    color: "#666",
    fontSize: 12,
  },
});

export default HomeScreen;
