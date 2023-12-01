import React from "react";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import customColors from "../config/customColors";
import LoginAndRegiButtons from "../components/LoginAndRegiButtons";

const LoginAndRegiScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image
          style={styles.logo}
          source={require("../assets/images/dishLogo.png")}
        />
      </View>
      <View style={styles.bottomHalf}>
        <LoginAndRegiButtons
          color="primary"
          buttonName={"Login"}
          buttonTextColor={customColors.white}
          onPress={() => console.log("Login pressed")}
        />
        <LoginAndRegiButtons
          color="white"
          buttonName={"Register"}
          buttonTextColor={customColors.primary}
          borderColor="primary"
          borderWidth={2}
          onPress={() => console.log("Register pressed")}
          style={{ marginBottom: 20 }}
        />
        <View style={{ height: 50 }} />

        <View style={styles.centeredImageView}>
          <Image
            style={styles.centeredImage}
            source={require("../assets/images/foodPlate.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginAndRegiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  topHalf: {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: customColors.primary,
    width: "100%",
  },
  bottomHalf: {
    flex: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    borderRadius: 100,
    width: 200,
    height: 200,
    marginTop: 50,
  },
  centeredImageView: {
    position: "absolute",
    top: "-25%",
    left: "23%",
    width: 320,
    height: 320,
    marginTop: -60,
    marginLeft: -50,
    borderRadius: 150, // Half of the width and height
    overflow: "hidden", // Make sure the image doesn't spill out of the border radius
    backgroundColor: "transparent", // Make sure the background doesn't cover the image
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    ...(Platform.OS === "android" ? { elevation: 13 } : {}),
  },

  centeredImage: {
    width: "100%",
    height: "100%",
  },
});
