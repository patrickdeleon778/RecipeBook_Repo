import React, { useState, useContext } from "react";
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
import RecipeContext from "../context/RecipeContext";

const FavoriteRecipes = ({ navigation }) => {
  const { savedRecipes } = useContext(RecipeContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = savedRecipes.filter((recipe) => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()));


  // console.log("Saved Recipes:", savedRecipes);
  // console.log('Saved Recipes title:', savedRecipes[0].title);

  const handleSearch = () => {

    const titles = savedRecipes.map((recipe) => recipe.title);
    console.log(titles);

  };

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
              style={{
                flex: 1,
                marginLeft: 10,
                paddingRight: 10,
                fontFamily: "Anon",
              }}
              placeholder="Search favorite recipe"
              onChangeText={(text) => setSearchQuery(text)}
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

          <View style={{ marginTop: 40, marginLeft: 5 }}>
            <AnonBold style={{ fontSize: 20, fontWeight: "bold" }}>
              Favorite Recipes
            </AnonBold>
          </View>
        </>
      }
      data={filteredRecipes}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <>
          <View style={{ flex: 1, margin: 10 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Recipe", { recipe: item });
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
    fontSize: 16,
  },
});

export default FavoriteRecipes;
