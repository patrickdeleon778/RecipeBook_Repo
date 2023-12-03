import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import customColors from "../config/customColors";
import JAHFont from "../components/customFonts/JAHFont";
import AnonBold from "../components/customFonts/AnonBold";
import AnonReg from "../components/customFonts/AnonReg";

const RecipeScreen = () => {

    const [ingredients, setIngredients] = useState([
        { name: 'flour', quantity: '500lb' },
        { name: 'pepperoni', quantity: '200lb' },
        { name: 'cheese', quantity: '300lb' },
        { name: 'marinara sauce', quantity: '150lb' },
        { name: 'leaf', quantity: '50lb' },
      ]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.7 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/images/pizzaimage.webp")}
        />
      </View>

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
          style={{ fontSize: 60, fontWeight: "bold", textAlign: "center" }}
        >
          Title
        </JAHFont>
        <FontAwesome5 name="share" size={40} color={customColors.primary} />
      </View>

      <View style={{ flex: 1, padding: 30 }}>
        <AnonBold style={{ fontSize: 24 }}>Ingredient</AnonBold>

        <View style={{ flex: 1, paddingLeft: 10 }}>
        {ingredients.map((ingredient, index) => (
          <View key={index} style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ width: 10, height: 10, backgroundColor: customColors.primary, borderRadius: 50, margin:7}}/>
            <AnonBold style={{ fontSize: 18, margin:3 }}>{ingredient.quantity}</AnonBold>
            <AnonReg style={{ fontSize: 14, margin:5 }}>{ingredient.name}</AnonReg>
          </View>
        ))}

        <AnonBold style={{ fontSize: 24, marginTop: 20 }}>Instructions</AnonBold>
        <AnonReg style={{ fontSize: 12, marginTop: 5, paddingLeft: 10 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repellat eos laborum beatae laudantium enim, ducimus autem hic natus ipsum voluptatum! Reiciendis placeat quo illo culpa mollitia rem qui praesentium!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repellat eos laborum beatae laudantium enim, ducimus autem hic natus ipsum voluptatum! Reiciendis placeat quo illo culpa mollitia rem qui praesentium!
          </AnonReg>
      </View>

      </View>
    </View>
  );
};

export default RecipeScreen;
