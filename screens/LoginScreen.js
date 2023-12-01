import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import customColors from "../config/customColors";
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'; 

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}></View>
      <View style={styles.bottomHalf}>
        <View style={styles.bottomHalfContent}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <Text style={styles.registerText}>Register now</Text>
          </Text>

          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 20, color: customColors.medium }}>
              Email
            </Text>

            <View style={styles.inputContainer}>
              <TextInput style={styles.input} />
              {/* <Feather
                name="check"
                size={20}
                color="green"
                style={styles.icon}
              /> */}
            </View>
          </View>
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
  },
  bottomHalf: {
    flex: 0.6,
    // overflow: "hidden", // This is needed to apply the border radius
    borderTopLeftRadius: 40, // Adjust as needed
    borderTopRightRadius: 40, // Adjust as needed
    backgroundColor: customColors.white,
  },
  bottomHalfContent: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 60,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: customColors.primary,
  },
  noAccountText: {
    fontSize: 14,
    color: customColors.primary,
    marginTop: 5,
  },
  registerText: {
    fontSize: 14,
    color: customColors.danger,
    fontStyle: "italic",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: customColors.medium,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    height: 30,
    color: customColors.medium,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  icon: {
    position: "absolute",
    right: 10,
    paddingBottom: 5,
  },
});

export default LoginScreen;
