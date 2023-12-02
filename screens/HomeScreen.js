import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import customColors from "../config/customColors";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = () => {
  const [foodData, setFoodData] = useState([
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

  return (
    <View
      className="flex-1 bg-white"
      style={{ marginHorizontal: 30, marginTop: 80 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View>
          <Image
            source={require("../assets/images/PQ2_Teddie.webp")}
            style={{ height: 75, width: 75, borderRadius: 100 }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Hello, user!</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
            A cool slogan goes here.
          </Text>
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
            style={{ flex: 1, marginLeft: 10, paddingRight: 10 }}
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
        
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: "center" }}>
        {foodData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => console.log(item.name + " pressed")}
            style={styles.button}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    margin: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50, 
    backgroundColor: customColors.light,
  },
  text: {
    color: "#666",
    fontSize: 16,
  },
});

export default HomeScreen;
