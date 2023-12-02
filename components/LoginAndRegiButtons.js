import React from "react";
import { TouchableOpacity, View } from "react-native";
import customColors from "../config/customColors";
import { StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import * as Font from "expo-font";

const LoginAndRegiButtons = ({buttonName, color, onPress, buttonTextColor, borderColor, borderWidth}) => {

  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Anon': require('../assets/fonts/AnonymousPro-Regular.ttf'), // replace 'path-to-your-font' with the actual path
    });

    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <View />;
  }
  


  return (
    <>
      <TouchableOpacity style={[styles.button, {backgroundColor: customColors[color], borderColor: customColors[borderColor], borderWidth: borderWidth}]} onPress={onPress}>
        <Text style={[styles.buttonText, {color: buttonTextColor}]}>{buttonName}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 80,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        padding: 15,
        margin: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Anon"
    },
})

export default LoginAndRegiButtons;
