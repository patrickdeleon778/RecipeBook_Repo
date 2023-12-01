import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import customColors from "../config/customColors";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image
          style={styles.logo}
          source={require("../assets/images/dishLogo.png")}
        />
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.bottomHalfContent}>
          <Text style={styles.aboutUsText}>About Us</Text>
          <Text style={styles.aboutUsBody}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repellat eos laborum beatae laudantium enim, ducimus autem hic natus ipsum voluptatum! Reiciendis placeat quo illo culpa mollitia rem qui praesentium!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repellat eos laborum beatae laudantium enim, ducimus autem hic natus ipsum voluptatum! Reiciendis placeat quo illo culpa mollitia rem qui praesentium!</Text>
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
  },
  aboutUsBody: {
    fontSize: 16,
    color: customColors.medium,
    textAlign: "center",
    marginTop: 20,
  }
  
});

export default AboutUsScreen;
