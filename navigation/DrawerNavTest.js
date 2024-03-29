import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUsScreen from "../screens/AboutUsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
import { NavigationContainer } from "@react-navigation/native";


const Drawer = createDrawerNavigator();

function DrawerNavTest() {
  return (
   
      <Drawer.Navigator
       drawerPosition="right"
   
    screenOptions={{
        headerShown: false,
    }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About Us" component={AboutUsScreen} />
      <Drawer.Screen name="Edit Profile" component={EditProfileScreen} />
      <Drawer.Screen name="Contact Us" component={ContactScreen} />
      
    </Drawer.Navigator>
   
   );
}  

export default DrawerNavTest;
