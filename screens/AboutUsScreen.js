import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import AnonReg from "../components/customFonts/AnonReg";

import customColors from "../config/customColors";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/routers";

const AboutUsScreen = () => {
  const navigate = useNavigation();

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            repellat eos laborum beatae laudantium enim, ducimus autem hic natus
            ipsum voluptatum! Reiciendis placeat quo illo culpa mollitia rem qui
            praesentium!Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Modi repellat eos laborum beatae laudantium enim, ducimus
            autem hic natus ipsum voluptatum! Reiciendis placeat quo illo culpa
            mollitia rem qui praesentium!
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
    marginVertical: 60,
  },
  logo: {
    borderRadius: 200,
    width: 250,
    height: 250,
    marginTop: 50,
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
