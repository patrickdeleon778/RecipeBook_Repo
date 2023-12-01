import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import AboutUsScreen from '../screens/AboutUsScreen'
import HomeScreen from '../screens/HomeScreen'
import RecipeScreen from '../screens/RecipeScreen'

// screen names
const HomeScreenName = "Home"
const RecipeScreenName = "Recipe"
const AboutUsScreenName = "About Us"

const Tab = createBottomTabNavigator()



const NavScreenHolder = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName={HomeScreenName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === HomeScreenName) {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === RecipeScreenName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name === AboutUsScreenName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 10,
                    paddingBottom: 10
                },
                style: {padding: 10, height: 70}
            }}
        >
            <Tab.Screen name={HomeScreenName} component={HomeScreen} />
            <Tab.Screen name={RecipeScreenName} component={RecipeScreen} />
            <Tab.Screen name={AboutUsScreenName} component={AboutUsScreen} />
        </Tab.Navigator>
      
    </NavigationContainer>
  )
}

export default NavScreenHolder
