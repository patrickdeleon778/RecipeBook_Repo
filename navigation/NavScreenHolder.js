import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import customColors from "../config/customColors";
import * as Font from "expo-font";
import { RecipeProvider } from "../context/RecipeContext";

// screen components
import AboutUsScreen from "../screens/AboutUsScreen";
import HomeScreen from "../screens/HomeScreen";
import FavoriteRecipes from "../screens/FavoriteRecipes";
import RecipeScreen from "../screens/RecipeScreen";
import CreateRecipeScreen from "../screens/CreateRecipeScreen";
import HomeStack from "./HomeStack";

// screen names
const HomeStackName = "HomeStack";
const CreateRecipeScreenName = "Create";
const FavoriteRecipesScreenName = "Favorite Recipes";

const Tab = createBottomTabNavigator();

const NavScreenHolder = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      Anon: require("../assets/fonts/AnonymousPro-Regular.ttf"),
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
    <RecipeProvider
    value={{
      savedRecipes,
      setSavedRecipes,
      isSaved,
      setIsSaved,
      isLoading,
      setIsLoading,
    }}>
      {/* NavigationContainer removed from here */}
      <Tab.Navigator
        initialRouteName={HomeStackName}
        screenOptions={({ route }) => ({
          headerShown: false, // hide the header
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case HomeStackName:
                iconName = focused ? "home" : "home-outline";
                break;
              case CreateRecipeScreenName:
                iconName = focused ? "pencil" : "pencil-outline";
                break;
              case FavoriteRecipesScreenName:
                iconName = focused ? "bookmark" : "bookmark-outline";
                break;
              // Add more cases as needed for other tabs
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: customColors.primary,
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 6,
          },
        })}
      >
        <Tab.Screen
          name={HomeStackName}
          component={HomeStack}
          options={{ tabBarLabel: "Home" }} // Customize your tab label here
        />
        {/* Add other Tab.Screen components as needed */}
        <Tab.Screen
          name={CreateRecipeScreenName}
          component={CreateRecipeScreen}
          options={{ tabBarLabel: "Create" }} // Customize your tab label here
        />
        <Tab.Screen
          name={FavoriteRecipesScreenName}
          component={FavoriteRecipes}
          options={{ tabBarLabel: "Favorites" }} // Customize your tab label here
        />
      </Tab.Navigator>
    </RecipeProvider>
  );
};

export default NavScreenHolder;
