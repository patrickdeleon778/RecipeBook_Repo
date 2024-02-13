import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import customColors from "../config/customColors";
import JAHFont from "../components/customFonts/JAHFont";
import AnonBold from "../components/customFonts/AnonBold";
import AnonReg from "../components/customFonts/AnonReg";
import { ScrollView } from "react-native-gesture-handler";
import * as Font from "expo-font";
import RecipeContext from "../context/RecipeContext";
import axios from 'axios';
import { useUser } from '../context/UserContext'; // Adjust the path as necessary

const RecipeScreen = ({ route }) => {
  const { recipe } = route.params;
  const { user } = useUser();
  console.log("Current user:", user); 
  const { savedRecipes, addFavorite, removeFavorite, isSaved, setIsSaved } = useContext(RecipeContext); // savedRecipes added here
   
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  console.log('Current user object:', user);
  console.log('User ID:', user._id);
  console.log('User email:', user.email);
  const handleSave = async () => {
    console.log('Save button clicked'); // Debug log
    const recipeId = recipe.id; // Or recipe._id or another identifier used by your backend

    if (isSaved) {
      console.log('Removing recipe from saved list'); // Debug log
      removeFavorite(user._id, recipeId)  // Ensure you're using user._id
        .then(() => {
          setIsSaved(false); // Update UI after successful removal
          // Maybe call getFavorites() to refresh the favorites list in the context
        })
        .catch(error => {
          console.error('Error removing favorite:', error);
          // Handle error (show error message, etc.)
        });
    } else {
      console.log('Adding recipe to saved list'); // Debug log
      addFavorite(user._id, recipeId)  // Ensure you're using user._id
        .then(() => {
          setIsSaved(true); // Update UI after successful addition
          // Maybe call getFavorites() to refresh the favorites list in the context
        })
        .catch(error => {
          console.error('Error adding favorite:', error);
          // Handle error (show error message, etc.)
        });
    }
  };


  console.log(savedRecipes);

  useEffect(() => {
    const allIngredients = recipe.extendedIngredients || [];
    const allInstructions = recipe.instructions || "";

    const cleanedInstructions = allInstructions.replace(/<[^>]*>/g, "");

    setIngredients(allIngredients);
    setInstructions(cleanedInstructions);
  }, [recipe]);

  useEffect(() => {
    const isRecipeSaved = savedRecipes.some(
      (savedRecipe) => savedRecipe.id === recipe.id
    );
    setIsSaved(isRecipeSaved);
  }, [savedRecipes, recipe]);

  // console.log(recipe);
  // console.log(instructions);

  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      JustA: require("../assets/fonts/JustAnotherHand-Regular.ttf"),
    });

    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.4 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: recipe.image }}
        />
      </View>

      <ScrollView style={{ flex: 0.6 }}>
        <View
          style={{
            flex: 0.25,
            padding: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            name={isSaved ? "bookmark" : "bookmark-outline"}
            size={40}
            color={customColors.primary}
            onPress={handleSave}
          />
          <JAHFont
            style={{ fontSize: 40, textAlign: "center", maxWidth: "80%" }}
          >
            {recipe.title}
          </JAHFont>
          <FontAwesome5 name="share" size={40} color={customColors.primary} />
        </View>

        <View style={{ flex: 1, padding: 30 }}>
          <AnonBold style={{ fontSize: 24 }}>Ingredient</AnonBold>

          <View style={{ flex: 1, paddingLeft: 10 }}>
            {ingredients.map((ingredient, index) => (
              <View key={index} style={{ flexDirection: "row", marginTop: 10 }}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: customColors.primary,
                    borderRadius: 50,
                    margin: 7,
                  }}
                />
                <AnonBold style={{ fontSize: 18, margin: 3 }}>
                  {ingredient.amount} {ingredient.unit}
                </AnonBold>
                <AnonReg style={{ fontSize: 14, margin: 5 }}>
                  {ingredient.originalName}
                </AnonReg>
              </View>
            ))}

            <AnonBold style={{ fontSize: 24, marginTop: 20 }}>
              Instructions
            </AnonBold>
            <AnonReg style={{ fontSize: 12, marginTop: 5, paddingLeft: 10 }}>
              {instructions}
            </AnonReg>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeScreen;
