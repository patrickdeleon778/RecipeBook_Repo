import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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
const HomeScreenName = "Home";
const RecipeScreenName = "Recipe";
const FavoriteRecipesScreenName = "Favorite Recipes";
const AboutUsScreenName = "About Us";
const CreateRecipeScreenName = "Create";
const HomeStackName = "HomeStack";
const DrawerNavName = "Settings";

const Tab = createBottomTabNavigator();

const NavScreenHolder = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      }}
    >
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={HomeScreenName}
          screenOptions={({ route }) => ({
            headerShown: false, // hide the header
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === HomeStackName) {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === CreateRecipeScreenName) {
                iconName = focused ? "pencil" : "pencil-outline";
              } else if (route.name === FavoriteRecipesScreenName) {
                iconName = focused ? "bookmark" : "bookmark-outline";
              } else if (route.name === AboutUsScreenName) {
                iconName = focused ? "menu" : "menu-outline";
              }
              return (
                <View style={{ paddingTop: 10 }}>
                  <Ionicons name={iconName} size={size} color={color} />
                </View>
              );
            },
            tabBarActiveTintColor: customColors.primary,
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
              fontSize: Platform.OS === "android" ? 11 : 10,
              fontFamily: "Anon",
              paddingBottom: Platform.OS === "android" ? 10 : 0,
            },
            tabBarStyle: {
              height: Platform.OS === "android" ? 70 : 80,
            },
          })}
        >
          <Tab.Screen
            name={HomeStackName}
            component={HomeStack}
            options={{ tabBarLabel: HomeScreenName }} // Display "Home" in the tab bar
          />
          <Tab.Screen
            name={CreateRecipeScreenName}
            component={CreateRecipeScreen}
          />
          <Tab.Screen
            name={FavoriteRecipesScreenName}
            component={FavoriteRecipes}
          />
            {/* <Tab.Screen name={AboutUsScreenName} component={AboutUsScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
};

export default NavScreenHolder;
