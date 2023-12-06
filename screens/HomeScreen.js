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

import { fetchRecipes } from "../services/getRecipeApi";

import AnonReg from "../components/customFonts/AnonReg";
import AnonBold from "../components/customFonts/AnonBold";

import customColors from "../config/customColors";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = () => {
  const [foodCatData, setFoodCatData] = useState([
    {
      id: 1,
      name: "Chicken",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    {
      id: 2,
      name: "Seafood",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
    { id: 3, name: "Beef", image: require("../assets/images/PQ2_Teddie.webp") },
    { id: 4, name: "Pork", image: require("../assets/images/PQ2_Teddie.webp") },
    {
      id: 5,
      name: "Veggie",
      image: require("../assets/images/PQ2_Teddie.webp"),
    },
  ]);

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

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then((recipes) => setRecipes(recipes));
  }, []);

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

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {foodCatData.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => console.log(item.name + " pressed")}
                style={styles.button}
              >
                <Image source={item.image} style={styles.image} />
                <AnonReg style={styles.text}>{item.name}</AnonReg>
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

export default HomeScreen;
