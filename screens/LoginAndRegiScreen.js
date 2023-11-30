import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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
        <View style={{height: 50}}/>

        <Image
          style={styles.centeredImage}
          source={require("../assets/images/funnyslime.png")}
      />
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
  centeredImage: {
    position: "absolute",
    top: "0%",
    left: "50%",
    width: 100, // Set the width of your centered image
    height: 100, // Set the height of your centered image
    marginTop: -60, // Half of the height
    marginLeft: -50, // Half of the width
  },
});
