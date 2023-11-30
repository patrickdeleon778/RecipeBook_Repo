import React from "react";
import { TouchableOpacity } from "react-native";
import customColors from "../config/customColors";
import { StyleSheet, Text } from "react-native";

const LoginAndRegiButtons = ({buttonName, color, onPress, buttonTextColor, borderColor, borderWidth}) => {
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
    },
})

export default LoginAndRegiButtons;
