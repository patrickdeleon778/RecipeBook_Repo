import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import customColors from "../config/customColors";

const RecipeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/images/pizzaimage.webp")}
        />
      </View>


      <View style={{ flex: 2, padding: 40, flexDirection: "row", justifyContent: 'space-between'}}>
        <Ionicons
          name="bookmark-outline"
          size={40}
          color={customColors.primary}
        />
        <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>
          Title
        </Text>
        <FontAwesome5 name="share" size={40} color={customColors.primary} />
      </View>
    </View>
  );
};

export default RecipeScreen;
