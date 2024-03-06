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

const NavScreenHolder = ({navigation}) => {
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
        isDrawerOpen,
        setIsDrawerOpen
      }}
    >
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={HomeStackScreen}
          screenOptions={({ route }) => ({
            headerShown: false, // hide the header
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === HomeStackScreen) {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === CreateRecipeScreenName) {
                iconName = focused ? "pencil" : "pencil-outline";
              } else if (route.name === FavoriteRecipesScreenName) {
                iconName = focused ? "bookmark" : "bookmark-outline";
              } else if (route.name === RecipeScreenName) {
                iconName = focused ? "bookmark" : "bookmark-outline";
              } else if (route.name === ContactScreenName) {
                iconName = focused ? "bookmark" : "bookmark-outline";
              } else if (route.name === DrawerNavTestName) {
                iconName = focused ? "bookmark" : "bookmark-outline";
              }

              return (
                //Navigate to Home------------------------------------------
                <TouchableOpacity
                  onPress={() => {
                    if (route.name === HomeStackScreen) {
                      navigation.navigate(HomeStackScreen);
                    }
                  }}
                >
                  <View style={{ paddingTop: 10 }}>
                    <Ionicons name={iconName} size={size} color={color} />
                  </View>
                </TouchableOpacity>
                //------------------------------------------------------------
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
            name={HomeStackScreen}
            component={HomeStack}
            options={{ tabBarLabel: HomeScreenName }}
          />

          <Tab.Screen
            name={CreateRecipeScreenName}
            component={CreateRecipe}
            options={{ tabBarLabel: "Create" }}
          />

          <Tab.Screen
            name={FavoriteRecipesScreenName}
            component={FavoriteRecipes}
            options={{ tabBarLabel: "Favorite Recipes" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
};

export default NavScreenHolder;
