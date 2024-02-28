import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AnonReg from "../components/customFonts/AnonReg";
import customColors from "../config/customColors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/routers";

const AboutUsScreen = () => {
  const navigate = useNavigation();

  const openDrawer = () => {
    navigate.dispatch(DrawerActions.openDrawer());
  };

  const navigateToHomeScreen = () => {
    // Replace 'AnotherScreen' with the actual name of the screen you want to navigate to
    navigate.navigate("HomeScreen");
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
        <Image
          style={styles.logo}
          source={require("../assets/images/dishLogo.png")}
        />
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.bottomHalfContent}>
          <AnonReg style={styles.aboutUsText}>About Us</AnonReg>
          <AnonReg style={styles.aboutUsBody}>
            We're a passionate group of food enthusiasts brought together by our
            love for cooking, experimenting with flavors, and sharing delicious
            recipes. We believe that good food has the power to bring
            people together. Our mission is to simplify the cooking experience,
            foster creativity in the kitchen, and allow members to share their
            culinary adventures.
          </AnonReg>
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
    position: "absolute",
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
    marginVertical: 60,
  },
  logo: {
    borderRadius: 160,
    width: 160,
    height: 160,
    marginBottom: 60,
    marginTop: 20,
  },
  aboutUsText: {
    fontSize: 40,
    fontWeight: "bold",
    color: customColors.primary,
    textAlign: "center",
    fontFamily: "Anon",
  },
  aboutUsBody: {
    fontSize: 16,
    color: customColors.medium,
    textAlign: "center",
    marginTop: 20,
  },
});

export default AboutUsScreen;
