import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import AboutUsScreen from "../screens/AboutUsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Drawer = createDrawerNavigator();

const AboutScreenDrawerName = "About Us";
const EditProfileScreenName = "Edit Profile";


const DrawerStack = () => (
  <Drawer.Navigator
    initialRouteName="NavScreenHolder"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Drawer.Screen name={AboutScreenDrawerName} component={AboutUsScreen} />
    <Drawer.Screen name={EditProfileScreenName} component={EditProfileScreen} />
  </Drawer.Navigator>
);

export default DrawerStack;
