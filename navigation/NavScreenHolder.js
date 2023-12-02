import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import customColors from "../config/customColors";

// screen components
import AboutUsScreen from "../screens/AboutUsScreen";
import HomeScreen from "../screens/HomeScreen";
import FavoriteRecipes from "../screens/FavoriteRecipes";
import RecipeScreen from "../screens/RecipeScreen";

// screen names
const HomeScreenName = "Home";
const RecipeScreenName = "Recipe";
const FavoriteRecipesScreenName = "Favorite Recipes";
const AboutUsScreenName = "About Us";

const Tab = createBottomTabNavigator();

const NavScreenHolder = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeScreenName}
        screenOptions={({ route }) => ({
            headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === HomeScreenName) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === RecipeScreenName) {
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
            fontSize: 10,
          },
          tabBarStyle: { height: 80 },
        })}
      >
        <Tab.Screen name={HomeScreenName} component={HomeScreen} />
        <Tab.Screen name={RecipeScreenName} component={RecipeScreen} />
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
