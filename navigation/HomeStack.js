import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeScreen from '../screens/RecipeScreen';
import DrawerNavTest from './DrawerNavTest';

const Stack = createStackNavigator();


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
    
      <Stack.Screen name={RecipeScreenName} component={RecipeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;