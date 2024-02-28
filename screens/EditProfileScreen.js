import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AnonReg from "../components/customFonts/AnonReg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import customColors from "../config/customColors";

import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/routers";


const EditProfileScreen = () => {
  const navigate = useNavigation();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  

  const openDrawer = () => {
    navigate.dispatch(DrawerActions.openDrawer());
  };

  const navigateToHomeScreen = () => {
    // Replace 'AnotherScreen' with the actual name of the screen you want to navigate to
    navigate.navigate("HomeScreen");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigate.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name={"menu"} size={40} />
        </TouchableOpacity>
        {image ? (
          <Image source={{ uri: image }} style={styles.logo} />
        ) : (
          <Image
            source={require("../assets/images/dishLogo.png")}
            style={styles.logo}
          />
        )}
      </View>

      <View style={styles.bottomHalf}>
        <View style={styles.bottomHalfContent}>
          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            <AnonReg style={{ color: customColors.white }}>
              Upload Image
            </AnonReg>
          </TouchableOpacity>

         
            <View style={styles.form}>
              <View style={styles.inputContainer}>
              
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="account"
                  size={30}
                  color={customColors.primary}
                />
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Name"
                  placeholderTextColor={customColors.primary}
                  width={200}
                />
              </View>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <FontAwesome
                  style={[styles.icon, { paddingLeft: 4 }]}
                  name="user-secret"
                  size={30}
                  color={customColors.primary}
                />
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Username"
                  placeholderTextColor={customColors.primary}
                  width={200}
                />
              </View>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="at"
                  size={30}
                  color={customColors.primary}
                />
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Email"
                  placeholderTextColor={customColors.primary}
                  width={200}
                />
              </View>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="lock"
                  size={30}
                  color={customColors.primary}
                />
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="Password"
                  placeholderTextColor={customColors.primary}
                  width={200}
                />
              </View>
            </View>

            
              <TouchableOpacity
                style={[
                  styles.updateButton,
                  {
                    backgroundColor: customColors.primary,
                  },
                ]}
                onPress={() => console.log("Update pressed")}
              >
                <AnonReg style={{ color: customColors.white, fontSize: 24 }}>
                  Update
                </AnonReg>
              </TouchableOpacity>
          
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.primary,
  },
  menuIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
  topHalf: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomHalf: {
    flex: 0.6,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: customColors.white,
  },
  bottomHalfContent: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 30,
  },
  logo: {
    borderRadius: 160,
    width: 160,
    height: 160,
    marginBottom: 60,
    marginTop: 20,

  },
 
  imageButton: {
    width: "50%", // Set the width to 50%
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center", // Center the button horizontally
    backgroundColor: customColors.primary,
    marginBottom: 20
  },
  updateButton: {
    width: "70%",
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: customColors.primary,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    height: 30,
    color: customColors.primary,
    paddingLeft: 5,
    paddingRight: 40,
    paddingBottom: 5,
    fontFamily: "Anon",
  },
});

export default EditProfileScreen;
