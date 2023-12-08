import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AboutUsScreen from "../screens/AboutUsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Stack = createStackNavigator();

const DrawerContent = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    if (item === AboutScreenDrawerName) {
      navigation.navigate(AboutUsScreen);
    } else if (item === EditProfileScreenName) {
      navigation.navigate(EditProfileScreen);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.drawerItem,
          selectedItem === AboutScreenDrawerName && styles.selectedItem,
        ]}
        onPress={() => handleItemPress(AboutScreenDrawerName)}
      >
        <Text>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drawerItem,
          selectedItem === EditProfileScreenName && styles.selectedItem,
        ]}
        onPress={() => handleItemPress(EditProfileScreenName)}
      >
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const AboutScreenDrawerName = "About Us";
const EditProfileScreenName = "Edit Profile";

const DrawerNav = ({ navigation }) => {
    const drawerWidth = Dimensions.get("window").width * 0.7;

  return (
    <View style={[styles.mainContainer, { width: drawerWidth }]}>
      <DrawerContent navigation={navigation} />
    </View>
  );
};


const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="DrawerNav">
      <Stack.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  drawerItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  selectedItem: {
    backgroundColor: "#e0e0e0",
  },
});

export default SettingStack;
