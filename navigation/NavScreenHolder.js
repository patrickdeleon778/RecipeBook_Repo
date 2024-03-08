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
// import AboutUsScreen from "../screens/AboutUsScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateRecipe from "../screens/CreateRecipeScreen";
import FavoriteRecipes from "../screens/FavoriteRecipes";
import RecipeScreen from "../screens/RecipeScreen";
import ContactScreen from "../screens/ContactScreen";
import HomeStack from "./HomeStack";
import DrawerNavTest from "./DrawerNavTest";

// screen names
const HomeScreenName = "Home";
const CreateRecipeScreenName = "Create";
const FavoriteRecipesScreenName = "Favorite Recipes";
const RecipeScreenName = "Recipe";
const ContactScreenName = "Contact Us";
const HomeStackScreen = "HomeStack";
const DrawerNavTestName = "Settings";

const Tab = createBottomTabNavigator();

const NavScreenHolder = ({ navigation }) => {
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
   
      <Tab.Navigator
  initialRouteName="HomeStackScreen"
  screenOptions={({ route }) => ({
    headerShown: false, // Hide the header
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      switch (route.name) {
        case "HomeStackScreen":
          iconName = focused ? "home" : "home-outline";
          break;
        case "CreateRecipeScreen":
          iconName = focused ? "pencil" : "pencil-outline";
          break;
        case "FavoriteRecipesScreen":
          iconName = focused ? "bookmark" : "bookmark-outline";
          break;
        // Add more cases as needed
        default:
          iconName = "circle"; // Default icon
      }
      // Return the icon component
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: customColors.primary,
    tabBarInactiveTintColor: "gray",
    tabBarLabelStyle: {
      fontSize: Platform.OS === "android" ? 11 : 10,
      fontFamily: "Anon", // Ensure this font is loaded
      paddingBottom: Platform.OS === "android" ? 10 : 0,
    },
    tabBarStyle: {
      height: Platform.OS === "android" ? 70 : 80,
    },
  })}
>
  {/* Define your tab screens here */}
  <Tab.Screen
    name="HomeStackScreen"
    component={HomeStack}
    options={{ tabBarLabel: () => null }} // Assuming you don't want to show a label
  />
  <Tab.Screen
    name="CreateRecipeScreen"
    component={CreateRecipe}
    options={{ tabBarLabel: "Create" }}
  />
  <Tab.Screen
    name="FavoriteRecipesScreen"
    component={FavoriteRecipes}
    options={{ tabBarLabel: "Favorites" }}
  />
  {/* Add more screens as needed */}
</Tab.Navigator>
    
    </RecipeProvider>
  );
};

export default NavScreenHolder;
