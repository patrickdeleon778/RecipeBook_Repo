import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RecipeScreen from '../screens/RecipeScreen';
import DrawerNavTest from './DrawerNavTest';

const Stack = createStackNavigator();

const HomeScreenName = "Home"; 
const RecipeScreenName = "Recipe";
const DrawerNavTestName = "Settings";
 




function HomeStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    > 
      <Stack.Screen name={DrawerNavTestName} component={DrawerNavTest} />
      <Stack.Screen name={HomeScreenName} component={HomeScreen} />
      <Stack.Screen name={RecipeScreenName} component={RecipeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;