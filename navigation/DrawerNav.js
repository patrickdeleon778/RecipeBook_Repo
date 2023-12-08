import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AboutUsScreen from "../screens/AboutUsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";

const DrawerContent = ({ navigation }) => {
const Stack = createStackNavigator();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    if (item === AboutScreenDrawerName) {
      navigation.navigate(AboutUsScreenName);
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
  return (
    <View style={styles.mainContainer}>
      <Text>Main Screen Content</Text>

      <DrawerContent navigation={navigation} />
    </View>
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

export default DrawerNav;
