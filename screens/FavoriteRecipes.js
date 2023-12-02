import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import customColors from "../config/customColors";
import AnonReg from "../components/customFonts/AnonReg";

import { FontAwesome5 } from "@expo/vector-icons";
import AnonBold from "../components/customFonts/AnonBold";

const FavoriteRecipes = () => {
  const [recipeData, setRecipeData] = useState([
    {
      id: 1,
      name: "Meatloaf",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    {
      id: 2,
      name: "Chicken Alfredo",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    {
      id: 3,
      name: "Pizza",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    {
      id: 4,
      name: "Philly Cheesesteak",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    {
      id: 5,
      name: "Potato salad",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    {
      id: 6,
      name: "Potato cake",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    {
      id: 7,
      name: "Potato Pancake",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    {
      id: 8,
      name: "Potato Soup",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
  ]);

  return (
    <FlatList
      contentContainerStyle={{ marginHorizontal: 20, paddingTop: 60 }}
      ListHeaderComponent={
        <>
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
              style={{ flex: 1, marginLeft: 10, paddingRight: 10, fontFamily: "Anon" }}
              placeholder="Search favorite recipe"
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
              onPress={() => console.log("Search button pressed")}
            >
              <FontAwesome5
                name="pizza-slice"
                size={28}
                color={customColors.medium}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 40, marginLeft: 5 }}>
            <AnonBold style={{ fontSize: 20, fontWeight: "bold" }}>Favorite Recipes</AnonBold>
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
              onPress={() => console.log("Pressed:", item.name)}
            >
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: customColors.light,
                  borderRadius: 40,
                }}
              />
            </TouchableOpacity>
            <AnonReg style={{ textAlign: "center", marginTop: 5 }}>
              {item.name}
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
    fontSize: 16,
  },
});

export default FavoriteRecipes;
