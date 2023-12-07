import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import customColors from "../config/customColors";
import JAHFont from "../components/customFonts/JAHFont";
import AnonBold from "../components/customFonts/AnonBold";
import AnonReg from "../components/customFonts/AnonReg";
import { ScrollView } from "react-native-gesture-handler";
import * as Font from "expo-font";


const RecipeScreen = ({ route }) => {
  const { recipe } = route.params;
  // console.log(recipe);

  const [ingredients, setIngredients] = useState([]);

  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    const allIngredients = recipe.extendedIngredients || [];
    const allInstructions = recipe.instructions || "";

    const cleanedInstructions = allInstructions.replace(/<[^>]*>/g, "");

    setIngredients(allIngredients);
    setInstructions(cleanedInstructions);
  }, [recipe]);

  // console.log(recipe);
  console.log(instructions);

  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'JustA': require('../assets/fonts/JustAnotherHand-Regular.ttf'),
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
            name="bookmark-outline"
            size={40}
            color={customColors.primary}
          />
          <JAHFont
            style={{ fontSize: 40, textAlign: "center", maxWidth: "80%", }}
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
