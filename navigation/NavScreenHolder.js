import React, { useState, useEffect} from "react";
import { View, Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import customColors from "../config/customColors";
import * as Font from 'expo-font';

// screen components
import AboutUsScreen from "../screens/AboutUsScreen";
import HomeScreen from "../screens/HomeScreen";
import FavoriteRecipes from "../screens/FavoriteRecipes";
import RecipeScreen from "../screens/RecipeScreen";
import CreateRecipeScreen from "../screens/CreateRecipeScreen";

// screen names
const HomeScreenName = "Home";
const RecipeScreenName = "Recipe";
const FavoriteRecipesScreenName = "Favorite Recipes";
const AboutUsScreenName = "About Us";
const CreateRecipeScreenName = "Create";

const Tab = createBottomTabNavigator();

const NavScreenHolder = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Anon': require('../assets/fonts/AnonymousPro-Regular.ttf'), // replace 'path-to-your-font' with the actual path
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
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeScreenName}
        screenOptions={({ route }) => ({
            headerShown: false, // hide the header
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === HomeScreenName) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === CreateRecipeScreenName) {
              iconName = focused ? "pencil" : "pencil-outline";
            } else if (route.name === FavoriteRecipesScreenName) {
              iconName = focused ? "bookmark" : "bookmark-outline";
            } else if (route.name === AboutUsScreenName) {
              iconName = focused ? "menu" : "menu-outline";
            }
            return (
              <View style={{ paddingTop: 10}}>
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: customColors.primary,
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: Platform.OS === 'android' ? 11 : 10,
            fontFamily: "Anon",
            paddingBottom: Platform.OS === 'android' ? 10 : 0,
          },
          tabBarStyle: { 
            height: Platform.OS === 'android' ? 70 : 80,
          },
        })}
      >
        <Tab.Screen name={HomeScreenName} component={HomeScreen} />
        <Tab.Screen name={CreateRecipeScreenName} component={CreateRecipeScreen} />
        <Tab.Screen
          name={FavoriteRecipesScreenName}
          component={FavoriteRecipes}
        />
        <Tab.Screen name={AboutUsScreenName} component={AboutUsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavScreenHolder;
